# Generalized Measure Framework

## Responsible CHOIRBOIS Conductor(s)

*To be assigned*


**Version:** 1.0
**Status:** Proposed
**Date:** 2025-05-22
**Author(s):** Cascade AI, User

## 1. Introduction & Motivation

*   **Purpose:** This document outlines a generalized framework for defining and managing various types of measures within the HEDIS Measure Engine & Analytics Platform. The aim is to create a versatile system capable of handling not only HEDIS measures but also other performance, quality, or operational metrics.
*   **Learning from the Ratings Framework:** We apply similar principles of abstraction, modularity, and reusability that were successfully implemented in the `ratings_framework_models.py` to the concept of a "measure."
*   **Benefits:**
    *   **Versatility:** Support for diverse measure types beyond HEDIS (e.g., operational metrics, financial KPIs, other healthcare quality measures).
    *   **Consistency:** A standardized approach to defining, implementing, and interpreting measures across the platform.
    *   **Extensibility:** Easier integration of new measure sets and types in the future.
    *   **Maintainability:** Clear separation of abstract measure concepts from domain-specific implementations, simplifying updates and management.
    *   **Reusability:** Leverage existing robust components like the rules engine and primitive type definitions.

## 2. Core Concepts of a Generalized Measure

A "Measure" in this framework is a quantifiable metric used to assess performance, quality, or status against a defined standard or objective. Key characteristics common to all measures include:

*   A unique identity and clear definition.
*   Defined scope or domain of application.
*   Specification of the type of value it produces.
*   Logic for identifying the eligible population or items.
*   Logic for calculating the measure value.
*   Guidelines for interpretation.

## 3. Proposed Pydantic Models for the Generalized Measure Framework

These models will reside in a new file, potentially `hedis_platform/app/models/generalized_measure_models.py`, or be integrated into `framework_models.py` if deemed appropriate.

### 3.1. `AbstractMeasureDefinition` (Base Model)

This model serves as the foundational abstract class for all measure definitions. It inherits from `AuditableModel` (defined in `hedis_platform/app/models/framework_models.py`) to include common audit fields.

```python
from typing import List, Optional, Dict
from enum import Enum
from pydantic import BaseModel, Field
from hedis_platform.app.models.framework_models import AuditableModel, EligibilityRuleSet, MeasureCalculationLogic # Assuming these are accessible
# PrimitiveType would be imported from hedis_platform.app.models.ratings_framework_models.py

class ImprovementDirectionEnum(str, Enum):
    HIGHER_IS_BETTER = "HigherIsBetter"
    LOWER_IS_BETTER = "LowerIsBetter"
    TARGET_IS_BEST = "TargetIsBest" # If a specific target is optimal

class DataSourceRequirement(BaseModel):
    source_name: str = Field(..., description="Name of the data source, e.g., 'Patient Demographics', 'Claims Data'")
    description: Optional[str] = Field(None, description="Details about the data source and its relevance")
    required_fields: List[str] = Field(default_factory=list, description="List of specific fields needed from this source")

class AbstractMeasureDefinition(AuditableModel):
    measure_definition_id: str = Field(..., description="Unique identifier for this measure definition (e.g., a UUID or a namespaced ID)")
    name: str = Field(..., description="Human-readable name for the measure")
    abbreviation: Optional[str] = Field(None, description="Common abbreviation for the measure")
    description: Optional[str] = Field(None, description="A comprehensive textual description of what the measure assesses, its purpose, and scope.")
    
    domain: str = Field(..., description="The broad area or category the measure applies to (e.g., 'Healthcare Quality', 'Financial Performance', 'Operational Efficiency'). Specific implementations can use Enums.")
    sub_domain: Optional[str] = Field(None, description="A more specific area within the primary domain.")
    measure_type: str = Field(..., description="The category of the measure (e.g., 'Process', 'Outcome', 'Structure', 'Patient Experience'). Specific implementations can use Enums.")
    
    rationale: Optional[str] = Field(None, description="Justification for why this measure is important and what it aims to achieve.")
    steward: Optional[str] = Field(None, description="The organization, body, or entity responsible for developing and maintaining the measure specification.")
    
    value_type_id: str = Field(..., description="Identifier of a PrimitiveType definition (from ratings_framework_models.py) that specifies the measure's output data type, constraints (min/max), and formatting (decimals).")
    improvement_direction: Optional[ImprovementDirectionEnum] = Field(None, description="Indicates whether a higher or lower value is generally considered better.")
    
    data_sources: List[DataSourceRequirement] = Field(default_factory=list, description="A list of data sources required to calculate this measure.")
    
    eligibility_logic: Optional[EligibilityRuleSet] = Field(None, description="Structured rules defining the population, items, or events to which the measure applies. Utilizes EligibilityRuleSet from framework_models.py.")
    calculation_logic: Optional[MeasureCalculationLogic] = Field(None, description="Structured steps and rules defining how the measure value is computed from the eligible set. Utilizes MeasureCalculationLogic from framework_models.py.")
    
    interpretation_guidelines: Optional[str] = Field(None, description="Guidance on how to understand, interpret, and use the measure results, including any benchmarks or targets if applicable.")
    tags: Optional[List[str]] = Field(default_factory=list, description="Keywords for categorization, searchability, and grouping of measures.")

    class Config:
        arbitrary_types_allowed = True # To allow complex types like EligibilityRuleSet
```

### 3.2. Supporting Enumerations and Models
*   `ImprovementDirectionEnum`: Defined above.
*   `DataSourceRequirement`: Defined above.
*   More generic `GenericMeasureDomainEnum` and `GenericMeasureTypeEnum` could be introduced if a controlled vocabulary is desired at the abstract level, otherwise `domain` and `measure_type` remain strings for flexibility.

## 4. Relationship to Existing Models

*   **`HealthMeasureType` (`hedis_platform/app/models/framework_models.py`):**
    *   `HealthMeasureType` will be refactored to **inherit** from `AbstractMeasureDefinition`.
    *   It will retain its health-specific fields (e.g., `category_id`, `hedis_measure_id`, `star_rating_measure_id`, `cahps_measure_id`, `cms_measure_id`) and potentially provide more specific enumerations for `domain` and `measure_type` relevant to healthcare.
    *   Fields from `AbstractMeasureDefinition` like `measure_definition_id`, `name`, `description`, `abbreviation`, `eligibility_logic`, `calculation_logic`, etc., will be inherited.
*   **Rules Engine (`framework_models.py`):**
    *   The existing `EligibilityRuleSet` and `MeasureCalculationLogic` models are directly reused by `AbstractMeasureDefinition`, demonstrating modularity.
*   **Ratings Framework (`ratings_framework_models.py`):**
    *   `PrimitiveType` is crucial and is referenced by `value_type_id` in `AbstractMeasureDefinition` to define the characteristics of the measure's output value (e.g., float, integer, percentage, valid range).

## 5. Implementing Specific Measure Types (e.g., HEDIS)

With this framework:
1.  `HealthMeasureType` (inheriting from `AbstractMeasureDefinition`) will serve as the base for all health-related measures, including HEDIS.
2.  A specific HEDIS measure like "Breast Cancer Screening" would be an *instance* of `HealthMeasureType`.
3.  Its `measure_definition_id` would be a unique ID (e.g., `HEDIS_BCS_MY2025`).
4.  Fields like `hedis_measure_id` would store the official NCQA identifier.
5.  `eligibility_logic` and `calculation_logic` would be populated with `EligibilityRuleSet` and `MeasureCalculationLogic` instances that codify the NCQA technical specifications for BCS.
6.  `value_type_id` would point to a `PrimitiveType` definition (e.g., one representing a percentage with two decimal places).

## 6. Impact on Project

*   **Code Changes:**
    *   Creation of new models (`AbstractMeasureDefinition`, `DataSourceRequirement`, `ImprovementDirectionEnum`) likely in `hedis_platform/app/models/generalized_measure_models.py` or integrated into `framework_models.py`.
    *   Refactoring of `HealthMeasureType` in `framework_models.py` to inherit from `AbstractMeasureDefinition`.
    *   Updates to any existing instantiations or uses of `HealthMeasureType`.
*   **Documentation Updates:**
    *   This document (`generalized_measure_framework.md`) will be the primary reference.
    *   `SPECS/001_VISION.md`, `SPECS/000_PROJECT_ROADMAP.md`, and `SPECS/000_OVERALL_PROJECT_CHECKLIST.md` will be updated to reflect this generalized approach.
*   **Development Workflow:**
    *   All new measures (HEDIS or otherwise) will be defined using this framework, promoting consistency.

## 7. Plan for Implementing HEDIS Measures using the New Framework

This will be an iterative process:

1.  **Finalize & Implement Framework Models:** Solidify and implement `AbstractMeasureDefinition` and supporting models. Refactor `HealthMeasureType`.
2.  **Source HEDIS Specifications:**
    *   Utilize `SPECS/info_docs/parsed_hedis_measures_my2025.json` for basic measure attributes (name, abbreviation, description, category).
    *   Detailed eligibility and calculation logic will require careful parsing of NCQA technical specification documents (PDFs, text files). No HTML file with this detailed logic was found in `SPECS/info_docs/`.
    *   The existing `hedis_platform/utils/hedis_measure_parser.py` might need to be enhanced or new parsers developed for extracting detailed rules.
3.  **Iterative Measure Implementation:**
    *   Select an initial small set (2-3) of HEDIS measures for implementation (e.g., BCS, COL).
    *   For each measure:
        *   Create an instance of the (refactored) `HealthMeasureType`.
        *   Define its `value_type_id` by creating or identifying a suitable `PrimitiveType`.
        *   Translate its NCQA eligibility criteria into an `EligibilityRuleSet` instance.
        *   Translate its NCQA calculation steps (numerator, denominator, exclusions) into a `MeasureCalculationLogic` instance.
        *   Populate all other relevant fields in the `HealthMeasureType` instance.
    *   Develop comprehensive unit tests for each measure's logic and instantiation.
4.  **Expansion:** Gradually implement the remaining HEDIS measures, refining the process and any shared logic components.
5.  **Serialization/Storage:** Plan how these Pydantic measure definitions will be stored and managed (e.g., as JSON/YAML files, in a database).

## 8. Open Questions & Discussion Points

*   Location of new models: New file vs. extending `framework_models.py`?
*   Need for generic `MeasureDomainEnum` / `MeasureTypeEnum` at the abstract level, or are string types sufficient for `AbstractMeasureDefinition`?
*   Strategy for managing a large library of `PrimitiveType` definitions for various measure outputs.
*   Detailed plan for parsing and translating complex NCQA specification documents into the rules engine components.

This framework aims to provide a robust and flexible foundation for defining all types of measures, significantly enhancing the platform's capabilities.
