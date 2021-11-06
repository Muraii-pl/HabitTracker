import React from 'react';
import './home.css'
import MainTemplate from "../../templates/MainTemplate";
import arrowDown from '../../assets/images/arrow-down.png';

const Home = () => {
    return (
        <MainTemplate>
            <div className='container100vh'>
                <div className='homeTitle'>
                    Habits Tracker
                </div>
                <div className='homeSubtitle'>
                    Zmień swoje nawyki już dziś
                </div>
                <div className='buttonDiv'>
                    <button className='mainButton'>
                        Dowiedz się więcej
                    </button>
                </div>
                <div className='buttonDiv'>
                    <button className='noneButton'>
                        <img src={arrowDown} alt='arrow down'/>
                    </button>
                </div>
            </div>
            <div className='100vhContainer'>
                <div className='textContainer'>
                    <h1>Czym jest Habit tracker?</h1>
                    <p>Habit tracker to specjalna przestrzeń do śledzenia nawyków i codziennych, powtarzalnych czynności, które chcemy utrwalić. W habit trackerze możemy umieścić wszystko to co chcemy robić regularnie np. codziennie, raz na tydzień, lub raz w miesiącu. Mogą to być czynności takie jak, codzienne ćwiczenia, trzymanie diety, ścielenie łóżka, czy po prostu wypicie odpowiedniej ilości wody, czyli w skrócie wszystkie najważniejsze dla nas czynności. Habit tracker pomaga nam w wyrabianiu nowych nawyków, ale może być przydatny także w pozbywaniu się złych, w tym wypadku może to być: dzień bez papierosów albo dzień bez podjadania między posiłkami.</p>
                    <h1>Jak wyrobić sobie nawyki?</h1>
                    <p>Zawsze jest dobry czas aby zacząć pracę nad nawykami, nie trzeba czekać na poniedziałek, kolejny miesiąc, czy nowy rok. Ważne jest, żeby ruszyć na przód, do celu. </p>
                    <p>Nie da się zmienić wszystkiego na raz, dlatego warto skupić się na kilku najważniejszych dla nas czynnościach na ten moment, a gdy będziemy gotowi rozpocząć pracę nad kolejnymi. Nie mamy nieskończonej uwagi, nie mamy nieskończonej energii – jak w takim razie mielibyśmy ogarnąć wiele zmian na raz i trzymać się ich dzień w dzień?</p>
                    <p>Wprowadzając nowy nawyk należy pamiętać, że upadki zdarzają się najlepszym. Coś poszło nie tak? Wstań, popraw koronę i zasuwaj dalej – najlepiej od razu, bez odkładania na jutro, czy użalania się nad samym sobą.</p>
                    <h1>Jak długo kształtuje się nawyk?</h1>
                    <p>Zdania na ten temat są bardzo różne. Przyjęło się, że w 21 dni jesteśmy w stanie przyzwyczaić się do jakiegoś zachowania na tyle, żeby wykonywać je automatycznie. Niektórzy wydłużają tę liczbę i mówią nawet o 3 miesiącach.</p>
                    <p>Tak naprawdę na pewno wiele zależy od naszej motywacji i determinacji. Im bardziej czegoś chcemy, tym szybciej i łatwiej uda nam się to osiągnąć. I odwrotnie – jeśli działamy na siłę, wtedy może być ciężko. Dlatego też w obu przypadkach warto jest sięgnąć po habit tracker, by monitorować swoje postępy.</p>
                    <button className='mainButtonPink mt-5 mb-5'>
                        Rozpocznij teraz !
                    </button>
                </div>
            </div>
        </MainTemplate>

    );
};

export default Home;