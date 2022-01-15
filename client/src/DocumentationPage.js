import React, { Component } from 'react';
import './DocumentationPage.css';
import Configuration from './Configuration';

class DocumentationPage extends Component {
    render() {
        return (
            <div>
                <h1>
                    Aplikacja bazuje na przykładzie
                </h1>

                <h3>
                    1. Dodano mikrousluge ktora zwraca informacje o wersji konfiguracji
                </h3>
                <ul>
                    <li>Dodano katalog config_api z konfiguracja uslugi</li>
                    <li>Zmieniono konfiguracje nginx</li>
                    <li>Usluga zwraca tekst statyczny</li>
                </ul>

                <h3>
                    2. Dodano kolumne w bazie danych (timestamp) aby pobrac ostatnie 10 oblczen
                </h3>

                <h3>
                    3. Dodano przycisk historia ktory wyswietla i ukrywa historie obliczen
                </h3>

                <h3>
                    4. Dodano zaleznosci serwisow (dependsOn) w docker-compose aby okreslic kolejnosci uruchamiania
                </h3>

                <h3>
                    5. Dodano odswiezanie wynikow po akcji submit
                </h3>

                <h3>
                    6. Dodano strukture stron
                </h3>

                <h3>
                    7. Dodano zmienna environment: CHOKIDAR_USEPOLLING: "true" (hot reload)
                </h3>

                <h1 className="red">Sample value from config service!</h1>
                <Configuration/>
            </div>
        );
    }
}

export default DocumentationPage;