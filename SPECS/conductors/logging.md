Loguru is a library which aims to bring enjoyable logging in Python.

Did you ever feel lazy about configuring a logger and used print() instead?... I did, yet logging is fundamental to every application and eases the process of debugging. Using Loguru you have no excuse not to use logging from the start, this is as simple as from loguru import logger.

Also, this library is intended to make Python logging less painful by adding a bunch of useful functionalities that solve caveats of the standard loggers. Using logs in your application should be an automatism, Loguru tries to make it both pleasant and powerful.

Installation

pip install loguru
Features

Ready to use out of the box without boilerplate
No Handler, no Formatter, no Filter: one function to rule them all
Easier file logging with rotation / retention / compression
Modern string formatting using braces style
Exceptions catching within threads or main
Pretty logging with colors
Asynchronous, Thread-safe, Multiprocess-safe
Fully descriptive exceptions
Structured logging as needed
Lazy evaluation of expensive functions
Customizable levels
Better datetime handling
Suitable for scripts and libraries
Entirely compatible with standard logging
Personalizable defaults through environment variables
Convenient parser
Exhaustive notifier
10x faster than built-in logging
Take the tour

Ready to use out of the box without boilerplate

The main concept of Loguru is that there is one and only one logger.

For convenience, it is pre-configured and outputs to stderr to begin with (but that's entirely configurable).

from loguru import logger

logger.debug("That's it, beautiful and simple logging!")
The logger is just an interface which dispatches log messages to configured handlers. Simple, right?

No Handler, no Formatter, no Filter: one function to rule them all

How to add a handler? How to set up logs formatting? How to filter messages? How to set level?

One answer: the add() function.

logger.add(sys.stderr, format="{time} {level} {message}", filter="my_module", level="INFO")
This function should be used to register sinks which are responsible for managing log messages contextualized with a record dict. A sink can take many forms: a simple function, a string path, a file-like object, a coroutine function or a built-in Handler.

Note that you may also remove() a previously added handler by using the identifier returned while adding it. This is particularly useful if you want to supersede the default stderr handler: just call logger.remove() to make a fresh start.

Easier file logging with rotation / retention / compression

If you want to send logged messages to a file, you just have to use a string path as the sink. It can be automatically timed too for convenience:

logger.add("file_{time}.log")
It is also easily configurable if you need rotating logger, if you want to remove older logs, or if you wish to compress your files at closure.

logger.add("file_1.log", rotation="500 MB")    # Automatically rotate too big file
logger.add("file_2.log", rotation="12:00")     # New file is created each day at noon
logger.add("file_3.log", rotation="1 week")    # Once the file is too old, it's rotated

logger.add("file_X.log", retention="10 days")  # Cleanup after some time

logger.add("file_Y.log", compression="zip")    # Save some loved space
Modern string formatting using braces style

Loguru favors the much more elegant and powerful {} formatting over %, logging functions are actually equivalent to str.format().

logger.info("If you're using Python {}, prefer {feature} of course!", 3.6, feature="f-strings")
Exceptions catching within threads or main

Have you ever seen your program crashing unexpectedly without seeing anything in the log file? Did you ever notice that exceptions occurring in threads were not logged? This can be solved using the catch() decorator / context manager which ensures that any error is correctly propagated to the logger.

@logger.catch
def my_function(x, y, z):
    # An error? It's caught anyway!
    return 1 / (x + y + z)
Pretty logging with colors

Loguru automatically adds colors to your logs if your terminal is compatible. You can define your favorite style by using markup tags in the sink format.

logger.add(sys.stdout, colorize=True, format="<green>{time}</green> <level>{message}</level>")
Asynchronous, Thread-safe, Multiprocess-safe

All sinks added to the logger are thread-safe by default. They are not multiprocess-safe, but you can enqueue the messages to ensure logs integrity. This same argument can also be used if you want async logging.

logger.add("somefile.log", enqueue=True)
Coroutine functions used as sinks are also supported and should be awaited with complete().

Fully descriptive exceptions

Logging exceptions that occur in your code is important to track bugs, but it's quite useless if you don't know why it failed. Loguru helps you identify problems by allowing the entire stack trace to be displayed, including values of variables (thanks better_exceptions for this!).

The code:

# Caution, "diagnose=True" is the default and may leak sensitive data in prod
logger.add("out.log", backtrace=True, diagnose=True)

def func(a, b):
    return a / b

def nested(c):
    try:
        func(5, c)
    except ZeroDivisionError:
        logger.exception("What?!")

nested(0)
Would result in:

2018-07-17 01:38:43.975 | ERROR    | __main__:nested:10 - What?!
Traceback (most recent call last):

  File "test.py", line 12, in <module>
    nested(0)
    └ <function nested at 0x7f5c755322f0>

> File "test.py", line 8, in nested
    func(5, c)
    │       └ 0
    └ <function func at 0x7f5c79fc2e18>

  File "test.py", line 4, in func
    return a / b
           │   └ 0
           └ 5

ZeroDivisionError: division by zero
Note that this feature won't work on default Python REPL due to unavailable frame data.

See also: Security considerations when using Loguru.

Structured logging as needed

Want your logs to be serialized for easier parsing or to pass them around? Using the serialize argument, each log message will be converted to a JSON string before being sent to the configured sink.

logger.add(custom_sink_function, serialize=True)
Using bind() you can contextualize your logger messages by modifying the extra record attribute.

logger.add("file.log", format="{extra[ip]} {extra[user]} {message}")
context_logger = logger.bind(ip="192.168.0.1", user="someone")
context_logger.info("Contextualize your logger easily")
context_logger.bind(user="someone_else").info("Inline binding of extra attribute")
context_logger.info("Use kwargs to add context during formatting: {user}", user="anybody")
It is possible to modify a context-local state temporarily with contextualize():

with logger.contextualize(task=task_id):
    do_something()
    logger.info("End of task")
You can also have more fine-grained control over your logs by combining bind() and filter:

logger.add("special.log", filter=lambda record: "special" in record["extra"])
logger.debug("This message is not logged to the file")
logger.bind(special=True).info("This message, though, is logged to the file!")
Finally, the patch() method allows dynamic values to be attached to the record dict of each new message:

logger.add(sys.stderr, format="{extra[utc]} {message}")
logger = logger.patch(lambda record: record["extra"].update(utc=datetime.utcnow()))
Lazy evaluation of expensive functions

Sometime you would like to log verbose information without performance penalty in production, you can use the opt() method to achieve this.

logger.opt(lazy=True).debug("If sink level <= DEBUG: {x}", x=lambda: expensive_function(2**64))

# By the way, "opt()" serves many usages
logger.opt(exception=True).info("Error stacktrace added to the log message (tuple accepted too)")
logger.opt(colors=True).info("Per message <blue>colors</blue>")
logger.opt(record=True).info("Display values from the record (eg. {record[thread]})")
logger.opt(raw=True).info("Bypass sink formatting\n")
logger.opt(depth=1).info("Use parent stack context (useful within wrapped functions)")
logger.opt(capture=False).info("Keyword arguments not added to {dest} dict", dest="extra")
Customizable levels

Loguru comes with all standard logging levels to which trace() and success() are added. Do you need more? Then, just create it by using the level() function.

new_level = logger.level("SNAKY", no=38, color="<yellow>", icon="🐍")

logger.log("SNAKY", "Here we go!")
Better datetime handling

The standard logging is bloated with arguments like datefmt or msecs, %(asctime)s and %(created)s, naive datetimes without timezone information, not intuitive formatting, etc. Loguru fixes it:

logger.add("file.log", format="{time:YYYY-MM-DD at HH:mm:ss} | {level} | {message}")
Suitable for scripts and libraries

Using the logger in your scripts is easy, and you can configure() it at start. To use Loguru from inside a library, remember to never call add() but use disable() instead so logging functions become no-op. If a developer wishes to see your library's logs, they can enable() it again.

# For scripts
config = {
    "handlers": [
        {"sink": sys.stdout, "format": "{time} - {message}"},
        {"sink": "file.log", "serialize": True},
    ],
    "extra": {"user": "someone"}
}
logger.configure(**config)

# For libraries, should be your library's `__name__`
logger.disable("my_library")
logger.info("No matter added sinks, this message is not displayed")

# In your application, enable the logger in the library
logger.enable("my_library")
logger.info("This message however is propagated to the sinks")
For additional convenience, you can also use the loguru-config library to setup the logger directly from a configuration file.

Entirely compatible with standard logging

Wish to use built-in logging Handler as a Loguru sink?

handler = logging.handlers.SysLogHandler(address=('localhost', 514))
logger.add(handler)
Need to propagate Loguru messages to standard logging?

class PropagateHandler(logging.Handler):
    def emit(self, record: logging.LogRecord) -> None:
        logging.getLogger(record.name).handle(record)

logger.add(PropagateHandler(), format="{message}")
Want to intercept standard logging messages toward your Loguru sinks?

class InterceptHandler(logging.Handler):
    def emit(self, record: logging.LogRecord) -> None:
        # Get corresponding Loguru level if it exists.
        try:
            level: str | int = logger.level(record.levelname).name
        except ValueError:
            level = record.levelno

        # Find caller from where originated the logged message.
        frame, depth = inspect.currentframe(), 0
        while frame:
            filename = frame.f_code.co_filename
            is_logging = filename == logging.__file__
            is_frozen = "importlib" in filename and "_bootstrap" in filename
            if depth > 0 and not (is_logging or is_frozen):
                break
            frame = frame.f_back
            depth += 1

        logger.opt(depth=depth, exception=record.exc_info).log(level, record.getMessage())

logging.basicConfig(handlers=[InterceptHandler()], level=0, force=True)
Personalizable defaults through environment variables

Don't like the default logger formatting? Would prefer another DEBUG color? No problem:

# Linux / OSX
export LOGURU_FORMAT="{time} | <lvl>{message}</lvl>"

# Windows
setx LOGURU_DEBUG_COLOR "<green>"
Convenient parser

It is often useful to extract specific information from generated logs, this is why Loguru provides a parse() method which helps to deal with logs and regexes.

pattern = r"(?P<time>.*) - (?P<level>[0-9]+) - (?P<message>.*)"  # Regex with named groups
caster_dict = dict(time=dateutil.parser.parse, level=int)        # Transform matching groups

for groups in logger.parse("file.log", pattern, cast=caster_dict):
    print("Parsed:", groups)
    # {"level": 30, "message": "Log example", "time": datetime(2018, 12, 09, 11, 23, 55)}
Exhaustive notifier

Loguru can easily be combined with the great apprise library (must be installed separately) to receive an e-mail when your program fail unexpectedly or to send many other kind of notifications.

import apprise

# Define the configuration constants.
WEBHOOK_ID = "123456790"
WEBHOOK_TOKEN = "abc123def456"

# Prepare the object to send Discord notifications.
notifier = apprise.Apprise()
notifier.add(f"discord://{WEBHOOK_ID}/{WEBHOOK_TOKEN}")

# Install a handler to be alerted on each error.
# You can filter out logs from "apprise" itself to avoid recursive calls.
logger.add(notifier.notify, level="ERROR", filter={"apprise": False})

Switching from Standard Logging to Loguru

Introduction to logging in Python

First and foremost, it is important to understand some basic concepts about logging in Python.

Logging is an essential part of any application, as it allows you to track the behavior of your code and diagnose issues. It associates messages with severity levels which are collected and dispatched to readable outputs called handlers.

For newcomers, take a look at the tutorial in the Python documentation: Logging HOWTO.

Fundamental differences between logging and loguru

Although loguru is written “from scratch” and does not rely on standard logging internally, both libraries serve the same purpose: provide functionalities to implement a flexible event logging system. The main difference is that standard logging requires the user to explicitly instantiate named Logger and configure them with Handler, Formatter and Filter, while loguru tries to narrow down the amount of configuration steps.

Apart from that, usage is globally the same, once the logger object is created or imported you can start using it to log messages with the appropriate severity (logger.debug("Dev message"), logger.warning("Danger!"), etc.), messages which are then sent to the configured handlers.

As for standard logging, default logs are sent to sys.stderr rather than sys.stdout. The POSIX standard specifies that stderr is the correct stream for “diagnostic output”. The main compelling case in favor or logging to stderr is that it avoids mixing the actual output of the application with debug information. Consider for example pipe-redirection like python my_app.py | other_app which would not be possible if logs were emitted to stdout. Another major benefit is that Python resolves encoding issues on sys.stderr by escaping faulty characters ("backslashreplace" policy) while it raises an UnicodeEncodeError ("strict" policy) on sys.stdout.

Replacing getLogger() function

It is usual to call getLogger() at the beginning of each file to retrieve and use a logger across your module, like this: logger = logging.getLogger(__name__).

Using Loguru, there is no need to explicitly get and name a logger, from loguru import logger suffices. Each time this imported logger is used, a record is created and will automatically contain the contextual __name__ value.

As for standard logging, the name attribute can then be used to format and filter your logs.

Replacing Logger objects

Loguru replaces the standard Logger configuration by a proper sink definition. Instead of configuring a logger, you should add() and parametrize your handlers. The setLevel() and addFilter() are suppressed by the configured sink level and filter parameters. The propagate attribute and disable() function can be replaced by the filter option too. The makeRecord() method can be replaced using the record["extra"] dict.

Sometimes, more fine-grained control is required over a particular logger. In such case, Loguru provides the bind() method which can be in particular used to generate a specifically named logger.

For example, by calling other_logger = logger.bind(name="other"), each message logged using other_logger will populate the record["extra"] dict with the name value, while using logger won’t. This permits differentiating logs from logger or other_logger from within your sink or filter function.

Let suppose you want a sink to log only some very specific messages:

def specific_only(record):
    return "specific" in record["extra"]

logger.add("specific.log", filter=specific_only)

specific_logger = logger.bind(specific=True)

logger.info("General message")          # This is filtered-out by the specific sink
specific_logger.info("Module message")  # This is accepted by the specific sink (and others)
Another example, if you want to attach one sink to one named logger:

# Only write messages from "a" logger
logger.add("a.log", filter=lambda record: record["extra"].get("name") == "a")
# Only write messages from "b" logger
logger.add("b.log", filter=lambda record: record["extra"].get("name") == "b")

logger_a = logger.bind(name="a")
logger_b = logger.bind(name="b")

logger_a.info("Message A")
logger_b.info("Message B")
Replacing Handler, Filter and Formatter objects

Standard logging requires you to create an Handler object and then call addHandler(). Using Loguru, the handlers are started using add(). The sink defines how the handler should manage incoming logging messages, as would do handle() or emit(). To log from multiple modules, you just have to import the logger, all messages will be dispatched to the added handlers.

While calling add(), the level parameter replaces setLevel(), the format parameter replaces setFormatter(), the filter parameter replaces addFilter(). The thread-safety is managed automatically by Loguru, so there is no need for createLock(), acquire() nor release(). The equivalent method of removeHandler() is remove() which should be used with the identifier returned by add().

Note that you don’t necessarily need to replace your Handler objects because add() accepts them as valid sinks.

In short, you can replace:

logger.setLevel(logging.DEBUG)

fh = logging.FileHandler("spam.log")
fh.setLevel(logging.DEBUG)

ch = logging.StreamHandler()
ch.setLevel(logging.ERROR)

formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
fh.setFormatter(formatter)
ch.setFormatter(formatter)

logger.addHandler(fh)
logger.addHandler(ch)
With:

fmt = "{time} - {name} - {level} - {message}"
logger.add("spam.log", level="DEBUG", format=fmt)
logger.add(sys.stderr, level="ERROR", format=fmt)
Replacing LogRecord objects

In Loguru, the equivalence of a LogRecord instance is a simple dict which stores the details of a logged message. To find the correspondence with LogRecord attributes, please refer to the “record dict” documentation which lists all available keys.

This dict is attached to each logged message through a special record attribute of the str-like object received by sinks. For example:

def simple_sink(message):
    # A simple sink can use "message" as a basic string and ignore the "record" attribute.
    print(message, end="")

def advanced_sink(message):
    # An advanced sink can use the "record" attribute to access contextual information.
    record = message.record

    if record["level"].no >= 50:
        file_path = record["file"].path
        print(f"Critical error in {file_path}", end="", file=sys.stderr)
    else:
        print(message, end="")

logger.add(simple_sink)
logger.add(advanced_sink)
As explained in the previous sections, the record dict is also available during invocation of filtering and formatting functions.

If you need to extend the record dict with custom information similarly to what was possible with setLogRecordFactory(), you can simply use the patch() method to add the desired keys to the record["extra"] dict.

Replacing % style formatting of messages

Loguru only supports {}-style formatting.

You have to replace logger.debug("Some variable: %s", var) with logger.debug("Some variable: {}", var). All *args and **kwargs passed to a logging function are used to call message.format(*args, **kwargs). Arguments which do not appear in the message string are simply ignored. Note that passing arguments to logging functions like this may be useful to (slightly) improve performances: it avoids formatting the message if the level is too low to pass any configured handler.

For converting the general format used by Formatter, refer to list of available record tokens.

For converting the date format used by datefmt, refer to list of available date tokens.

Replacing exc_info argument

While calling standard logging function, you can pass exc_info as an argument to add stacktrace to the message. Instead of that, you should use the opt() method with exception parameter, replacing logger.debug("Debug error:", exc_info=True) with logger.opt(exception=True).debug("Debug error:").

The formatted exception will include the whole stacktrace and variables. To prevent that, make sure to use backtrace=False and diagnose=False while adding your sink.

Replacing extra argument and LoggerAdapter objects

To pass contextual information to log messages, replace extra by inlining bind() method:

context = {"clientip": "192.168.0.1", "user": "fbloggs"}

logger.info("Protocol problem", extra=context)   # Standard logging
logger.bind(**context).info("Protocol problem")  # Loguru
This will add context information to the record["extra"] dict of your logged message, so make sure to configure your handler format adequately:

fmt = "%(asctime)s %(clientip)s %(user)s %(message)s"     # Standard logging
fmt = "{time} {extra[clientip]} {extra[user]} {message}"  # Loguru
You can also replace LoggerAdapter by calling logger = logger.bind(clientip="192.168.0.1") before using it, or by assigning the bound logger to a class instance:

class MyClass:

    def __init__(self, clientip):
        self.logger = logger.bind(clientip=clientip)

    def func(self):
        self.logger.debug("Running func")
Replacing isEnabledFor() method

If you wish to log useful information for your debug logs, but don’t want to pay the performance penalty in release mode while no debug handler is configured, standard logging provides the isEnabledFor() method:

if logger.isEnabledFor(logging.DEBUG):
    logger.debug("Message data: %s", expensive_func())
You can replace this with the opt() method and lazy option:

# Arguments should be functions which will be called if needed
logger.opt(lazy=True).debug("Message data: {}", expensive_func)
Replacing addLevelName() and getLevelName() functions

To add a new custom level, you can replace addLevelName() with the level() function:

logging.addLevelName(33, "CUSTOM")                       # Standard logging
logger.level("CUSTOM", no=45, color="<red>", icon="🚨")  # Loguru
The same function can be used to replace getLevelName():

logger.getLevelName(33)  # => "CUSTOM"
logger.level("CUSTOM")   # => (name='CUSTOM', no=33, color="<red>", icon="🚨")
Note that contrary to standard logging, Loguru doesn’t associate severity number to any level, levels are only identified by their name.

Replacing basicConfig() and dictConfig() functions

The basicConfig() and dictConfig() functions are replaced by the configure() method.

This does not accept config.ini files, though, so you have to handle that yourself using your favorite format.

Replacing captureWarnings() function

The captureWarnings() function which redirects alerts from the warnings module to the logging system can be implemented by simply replacing warnings.showwarning() function as follow:

import warnings
from loguru import logger

showwarning_ = warnings.showwarning

def showwarning(message, *args, **kwargs):
    logger.warning(message)
    showwarning_(message, *args, **kwargs)

warnings.showwarning = showwarning
Replacing assertLogs() method from unittest library

The assertLogs() method defined in the unittest from standard library is used to capture and test logged messages. However, it can’t be made compatible with Loguru. It needs to be replaced with a custom context manager possibly implemented as follows:

from contextlib import contextmanager

@contextmanager
def capture_logs(level="INFO", format="{level}:{name}:{message}"):
    """Capture loguru-based logs."""
    output = []
    handler_id = logger.add(output.append, level=level, format=format)
    yield output
    logger.remove(handler_id)
It provides the list of logged messages for each of which you can access the record attribute. Here is a usage example:

def do_something(val):
    if val < 0:
        logger.error("Invalid value")
        return 0
    return val * 2


class TestDoSomething(unittest.TestCase):
    def test_do_something_good(self):
        with capture_logs() as output:
            do_something(1)
        self.assertEqual(output, [])

    def test_do_something_bad(self):
        with capture_logs() as output:
            do_something(-1)
        self.assertEqual(len(output), 1)
        message = output[0]
        self.assertIn("Invalid value", message)
        self.assertEqual(message.record["level"].name, "ERROR")
See also

See testing logging for more information.
Replacing caplog fixture from pytest library

pytest is a very common testing framework. The caplog fixture captures logging output so that it can be tested against. For example:

from loguru import logger

def some_func(a, b):
    if a < 0:
        logger.warning("Oh no!")
    return a + b

def test_some_func(caplog):
    assert some_func(-1, 3) == 2
    assert "Oh no!" in caplog.text
If you’ve followed all the migration guidelines thus far, you’ll notice that this test will fail. This is because pytest links to the standard library’s logging module.

So to fix things, we need to add a sink that propagates Loguru to the caplog handler. This is done by overriding the caplog fixture to capture its handler. In your conftest.py file, add the following:

import pytest
from loguru import logger
from _pytest.logging import LogCaptureFixture

@pytest.fixture
def caplog(caplog: LogCaptureFixture):
    handler_id = logger.add(
        caplog.handler,
        format="{message}",
        level=0,
        filter=lambda record: record["level"].no >= caplog.handler.level,
        enqueue=False,  # Set to 'True' if your test is spawning child processes.
    )
    yield caplog
    logger.remove(handler_id)
Run your tests and things should all be working as expected. Additional information can be found in GH#59 and GH#474. You can also install and use the pytest-loguru package created by @mcarans.

Note that if you want Loguru logs to be propagated to Pytest terminal reporter, you can do so by overriding the reportlog fixture as follows:

import pytest
from loguru import logger

@pytest.fixture
def reportlog(pytestconfig):
    logging_plugin = pytestconfig.pluginmanager.getplugin("logging-plugin")
    handler_id = logger.add(logging_plugin.report_handler, format="{message}")
    yield
    logger.remove(handler_id)
Finally, when dealing with the --log-cli-level command-line flag, remember that this option controls the standard logging logs, not loguru ones. For this reason, you must first install a PropagateHandler for compatibility:

@pytest.fixture(autouse=True)
def propagate_logs():

    class PropagateHandler(logging.Handler):
        def emit(self, record):
            if logging.getLogger(record.name).isEnabledFor(record.levelno):
                logging.getLogger(record.name).handle(record)

    logger.remove()
    logger.add(PropagateHandler(), format="{message}")
    yield
