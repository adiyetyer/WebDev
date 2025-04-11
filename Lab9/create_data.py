import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'hh_back.settings')
django.setup()

from api.models import Company, Vacancy

def create_companies():
    companies_data = [
        {
            'name': 'Google',
            'description': 'A global technology company focused on online advertising, search engine, cloud computing, and other digital products and services.',
            'city': 'Mountain View',
            'address': '1600 Amphitheatre Parkway, Mountain View, CA 94043, USA'
        },
        {
            'name': 'Microsoft',
            'description': 'A multinational technology company that develops and sells computer software, consumer electronics, and personal computers.',
            'city': 'Redmond',
            'address': 'One Microsoft Way, Redmond, WA 98052, USA'
        },
        {
            'name': 'Amazon',
            'description': 'An American multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
            'city': 'Seattle',
            'address': '410 Terry Ave N, Seattle, WA 98109, USA'
        },
        {
            'name': 'Apple',
            'description': 'An American multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services.',
            'city': 'Cupertino',
            'address': 'One Apple Park Way, Cupertino, CA 95014, USA'
        },
        {
            'name': 'Meta',
            'description': 'A technology company focused on social networking services including Facebook, Instagram, and WhatsApp.',
            'city': 'Menlo Park',
            'address': '1 Hacker Way, Menlo Park, CA 94025, USA'
        }
    ]
    
    companies = []
    for company_data in companies_data:
        company = Company.objects.create(
            name=company_data['name'],
            description=company_data['description'],
            city=company_data['city'],
            address=company_data['address']
        )
        companies.append(company)
        print(f"Created company: {company.name}")
    
    return companies

def create_vacancies(companies):
    vacancies_data = [
        {
            'name': 'Software Engineer',
            'description': 'Develop and maintain software applications using Java and Python.',
            'salary': 120000,
            'company': companies[0]  # Google
        },
        {
            'name': 'Senior Software Engineer',
            'description': 'Lead development teams and architect software solutions.',
            'salary': 150000,
            'company': companies[0]  # Google
        },
        {
            'name': 'Frontend Developer',
            'description': 'Build responsive user interfaces using React and Angular.',
            'salary': 110000,
            'company': companies[1]  # Microsoft
        },
        {
            'name': 'Backend Developer',
            'description': 'Develop server-side logic and maintain databases.',
            'salary': 115000,
            'company': companies[1]  # Microsoft
        },
        {
            'name': 'Data Scientist',
            'description': 'Analyze large datasets and develop machine learning models.',
            'salary': 130000,
            'company': companies[2]  # Amazon
        },
        {
            'name': 'DevOps Engineer',
            'description': 'Automate deployment processes and manage cloud infrastructure.',
            'salary': 125000,
            'company': companies[2]  # Amazon
        },
        {
            'name': 'Product Manager',
            'description': 'Define product vision and lead cross-functional teams.',
            'salary': 140000,
            'company': companies[3]  # Apple
        },
        {
            'name': 'iOS Developer',
            'description': 'Build mobile applications for Apple devices using Swift.',
            'salary': 118000,
            'company': companies[3]  # Apple
        },
        {
            'name': 'UX/UI Designer',
            'description': 'Design user interfaces and improve user experience.',
            'salary': 105000,
            'company': companies[4]  # Meta
        },
        {
            'name': 'Machine Learning Engineer',
            'description': 'Develop AI algorithms and implement machine learning solutions.',
            'salary': 135000,
            'company': companies[4]  # Meta
        },
        {
            'name': 'Cybersecurity Analyst',
            'description': 'Protect company systems from cyber threats and vulnerabilities.',
            'salary': 122000,
            'company': companies[0]  # Google
        },
        {
            'name': 'Database Administrator',
            'description': 'Manage and optimize database systems.',
            'salary': 108000,
            'company': companies[1]  # Microsoft
        },
        {
            'name': 'Cloud Architect',
            'description': 'Design and implement cloud infrastructure solutions.',
            'salary': 145000,
            'company': companies[2]  # Amazon
        },
        {
            'name': 'Quality Assurance Engineer',
            'description': 'Ensure software quality through testing and automation.',
            'salary': 95000,
            'company': companies[3]  # Apple
        },
        {
            'name': 'Data Engineer',
            'description': 'Build data pipelines and infrastructure for large-scale data processing.',
            'salary': 128000,
            'company': companies[4]  # Meta
        }
    ]
    
    for vacancy_data in vacancies_data:
        vacancy = Vacancy.objects.create(
            name=vacancy_data['name'],
            description=vacancy_data['description'],
            salary=vacancy_data['salary'],
            company=vacancy_data['company']
        )
        print(f"Created vacancy: {vacancy.name} at {vacancy.company.name}")

if __name__ == '__main__':
    # Check if data already exists
    if Company.objects.count() == 0:
        print("Creating sample data...")
        companies = create_companies()
        create_vacancies(companies)
        print("Sample data creation completed!")
    else:
        print("Data already exists. Skipping sample data creation.") 