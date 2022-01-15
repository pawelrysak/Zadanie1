Aplikacja bazuje na przykładzie
1. Dodano mikrousluge ktora zwraca informacje o wersji konfiguracji

    Dodano katalog config_api z konfiguracja uslugi
    Zmieniono konfiguracje nginx
    Usluga zwraca tekst statyczny

2. Dodano kolumne w bazie danych (timestamp) aby pobrac ostatnie 10 oblczen
3. Dodano przycisk historia ktory wyswietla i ukrywa historie obliczen
4. Dodano zaleznosci serwisow (dependsOn) w docker-compose aby okreslic kolejnosci uruchamiania
5. Dodano odswiezanie wynikow po akcji submit
6. Dodano strukture stron
7. Dodano zmienna environment: CHOKIDAR_USEPOLLING: "true" (hot reload)
Sample value from config service!
Config:
Current Configuration: 10422313213