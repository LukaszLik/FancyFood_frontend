# Frontend

##
Group project, my commits have been made with Fresh222 gitlab account. I focused mainly on the front page.

## How to start
Clone repository using `git clone https://gitlab.com/placki1/frontend.git`
Install node modules using `npm install`
Start project with `npm start`

## Commands (Remember to use before commiting files!)
Use `npm run format` to format all files in the src folder using prettier extension
Use `npm run lint` to lint all files in the src folder using eslint extension

## <span style="color:red">WAŻNE</span>
#### Nie wrzucamy zmian bezpośrednio na mastera (chyba, że są to małe zmiany np. zapomniałem gdzieś kropki itp)
#### <span style="color:red">( najprawdopodobniej ta opcja będzie zablokowana )</span> 

Dla każdego taska tworzymy nowy branch według wzoru: __feature/task_jira_code__ lub __feature/task_jira_code-short_description__  
Gdy zadanie zostanie skończone robimy __merge request__ i przesuwamy w jira status na verification i szukamy osoby chętnej do zrobienia weryfikacji/code review  
Kod po akceptacji wrzucamy na mastera (Należy pamiętać aby przed tą operacją podbić wersję projektu)

## Proxy

W pliku package.json dodane jest ustawienie "proxy". Definiuje ono gdzie będą trafiały requesty z Axiosa. 
Obecnie URL dla metod HTTP nie muszą zawierać części hosta. Np:
<p style="text-align: center;font-style: italic"> axios.post( "registration") </p>
jest równoważne:
<p style="text-align: center; font-style: italic" >axios.post("http://localhost:8081/api/v1/registration")</p>
