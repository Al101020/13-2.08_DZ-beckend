[![Build status](https://ci.appveyor.com/api/projects/status/apat7k76w3j1wpqd?svg=true)](https://ci.appveyor.com/project/Al101020/13-2-08-dz-beckend)<dr>
https://al101020.github.io/13-2.08_DZ-beckend/<dr>

# 13-2.08_DZ
REST, Server-sent events, WebSockets
Задание:
https://github.com/netology-code/ahj-homeworks/tree/AHJ-50/sse-ws

-------------------------------------------------------------------------------
в Yandex нашёл пример перехвата исключения или ошибки (не знаю, на сколько поможет):
async function fetchData(url) {  
    try {  
        const response = await fetch(url);  
        if (!response.ok) {  
            throw new Error(response.statusText);  // Если статус не OK, генерируем исключение  
        }  
        const data = await response.json();  
        return data;  
    }  
    catch (error) {  
        console.error('Fetch завершился с ошибкой:', error);  
    }  
} 

-------------------------------------------------------------------------------
git clone https://github.com/Al101020/13-2.08_DZ-beckend.git
npm install
cd 13-2.08_DZ-beckend
npm start
npm run lint -- --fix

