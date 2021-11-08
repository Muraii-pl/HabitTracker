import React from 'react';
import './home.css'
import MainTemplate from "../../templates/MainTemplate";
import arrowDown from '../../assets/images/arrow-down.png';
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet'
import {Link as LinkScroll} from 'react-scroll'

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Habits Tracker</title>
        </Helmet>
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
                        <LinkScroll
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            Dowiedz się więcej
                        </LinkScroll>
                    </button>
                </div>
                <div className='buttonDiv'>
                    <button className='noneButton'>
                        <LinkScroll
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                        <img src={arrowDown} alt='arrow down'/>
                        </LinkScroll>
                    </button>
                </div>
            </div>
            <div className='100vhContainer' id="about">
                <div className='textContainer'>
                    <h1 className='mb-5'>Czym jest Habit tracker?</h1>
                    <p className='mb-5'>Habit tracker to specjalna przestrzeń do śledzenia nawyków i codziennych, powtarzalnych czynności, które chcemy utrwalić. W habit trackerze możemy umieścić wszystko to co chcemy robić regularnie np. codziennie, raz na tydzień, lub raz w miesiącu. Mogą to być czynności takie jak, codzienne ćwiczenia, trzymanie diety, ścielenie łóżka, czy po prostu wypicie odpowiedniej ilości wody, czyli w skrócie wszystkie najważniejsze dla nas czynności. Habit tracker pomaga nam w wyrabianiu nowych nawyków, ale może być przydatny także w pozbywaniu się złych, w tym wypadku może to być: dzień bez papierosów albo dzień bez podjadania między posiłkami.</p>
                    <h1 className='mb-5'>Jak wyrobić sobie nawyki?</h1>
                    <p className='mb-3'>Zawsze jest dobry czas aby zacząć pracę nad nawykami, nie trzeba czekać na poniedziałek, kolejny miesiąc, czy nowy rok. Ważne jest, żeby ruszyć na przód, do celu. </p>
                    <p className='mb-3'>Nie da się zmienić wszystkiego na raz, dlatego warto skupić się na kilku najważniejszych dla nas czynnościach na ten moment, a gdy będziemy gotowi rozpocząć pracę nad kolejnymi. Nie mamy nieskończonej uwagi, nie mamy nieskończonej energii – jak w takim razie mielibyśmy ogarnąć wiele zmian na raz i trzymać się ich dzień w dzień?</p>
                    <p className='mb-5'>Wprowadzając nowy nawyk należy pamiętać, że upadki zdarzają się najlepszym. Coś poszło nie tak? Wstań, popraw koronę i zasuwaj dalej – najlepiej od razu, bez odkładania na jutro, czy użalania się nad samym sobą.</p>
                    <h1 className='mb-5'>Jak długo kształtuje się nawyk?</h1>
                    <p className='mb-3'>Zdania na ten temat są bardzo różne. Przyjęło się, że w 21 dni jesteśmy w stanie przyzwyczaić się do jakiegoś zachowania na tyle, żeby wykonywać je automatycznie. Niektórzy wydłużają tę liczbę i mówią nawet o 3 miesiącach.</p>
                    <p className='mb-3'>Tak naprawdę na pewno wiele zależy od naszej motywacji i determinacji. Im bardziej czegoś chcemy, tym szybciej i łatwiej uda nam się to osiągnąć. I odwrotnie – jeśli działamy na siłę, wtedy może być ciężko. Dlatego też w obu przypadkach warto jest sięgnąć po habit tracker, by monitorować swoje postępy.</p>
                    <Link to="/register">
                    <button className='mainButtonPink mt-5 mb-5'>
                        Rozpocznij teraz !
                    </button>
                    </Link>
                </div>
            </div>
        </MainTemplate>
        </>
    );
};

export default Home;