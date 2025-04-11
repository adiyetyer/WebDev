# HeadHunter API

This Django REST API project provides a backend for a job search platform, allowing you to manage companies and vacancies.

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   pip install django djangorestframework
   ```
3. Apply migrations:
   ```
   python manage.py migrate
   ```
4. Load sample data:
   ```
   python create_data.py
   ```
5. Run the development server:
   ```
   python manage.py runserver
   ```

## API Endpoints

The API provides the following endpoints:

### Companies

- **GET /api/companies/** - List all companies
  - Returns a JSON array of all companies

- **GET /api/companies/{id}/** - Get a specific company by ID
  - Returns a JSON object with company details

- **GET /api/companies/{id}/vacancies/** - List all vacancies for a specific company
  - Returns a JSON array of vacancies belonging to the specified company

### Vacancies

- **GET /api/vacancies/** - List all vacancies
  - Returns a JSON array of all vacancies

- **GET /api/vacancies/{id}/** - Get a specific vacancy by ID
  - Returns a JSON object with vacancy details

- **GET /api/vacancies/top_ten/** - List top 10 vacancies by salary
  - Returns a JSON array of the 10 highest-paying vacancies sorted by decreasing salary

## Models

### Company
- `id` - Auto-incrementing ID
- `name` - Company name (CharField)
- `description` - Company description (TextField)
- `city` - Company city (CharField)
- `address` - Company address (TextField)

### Vacancy
- `id` - Auto-incrementing ID
- `name` - Vacancy title (CharField)
- `description` - Vacancy description (TextField)
- `salary` - Vacancy salary (FloatField)
- `company` - Foreign key to Company model

## Sample Usage with Postman

You can use Postman to test the API endpoints:

1. Get all companies: `GET http://localhost:8000/api/companies/`
2. Get a specific company: `GET http://localhost:8000/api/companies/1/`
3. Get vacancies for a specific company: `GET http://localhost:8000/api/companies/1/vacancies/`
4. Get all vacancies: `GET http://localhost:8000/api/vacancies/`
5. Get a specific vacancy: `GET http://localhost:8000/api/vacancies/1/`
6. Get top 10 vacancies by salary: `GET http://localhost:8000/api/vacancies/top_ten/` 