from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

def frontend_view(request):
    return render(request, 'index.html')

@csrf_exempt
@require_http_methods(["GET", "HEAD", "OPTIONS"])
def api_status(request):
    return JsonResponse({
        'message': 'API is working!',
        'status': 'healthy',
        'environment': 'production'
    })
