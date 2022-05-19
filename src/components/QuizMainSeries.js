import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';
import Inicio from './Inicio';

export default class Quiz extends Component {

    
    state = {
        quiestions: {
            1: 'Qual série é essa?',
            2: 'Qual série é essa?',
            3: 'Qual série é essa??',
            4: 'Qual série é essa?',
            5: 'Qual série é essa?',
            6: 'Qual série é essa?',
            7: 'Qual série é essa?',
            8: 'Qual série é essa?',
            9: 'Qual série é essa?',
            10:'Qual série é essa?'
        },
        imagem: {
            1: 'https://i.pinimg.com/564x/1c/3b/ca/1c3bca59f5c27f3d220c59809ed445c5.jpg',
            2: 'https://feriasdecinema.com/wp-content/uploads/2020/09/theboys-newplazamotel.jpg',
            3: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2017/08/7-winterfeell-tyrion.jpg',
            4: 'https://lh3.googleusercontent.com/-D6VubHP3kT0/YVEOSck2reI/AAAAAAADf0A/8QUZIQq-LPQvylifTEmVVwDuCdAIXVFVQCLcBGAsYHQ/w640-h270/Round%2B6%2B%252835%2529.jpg',
            5: 'https://elcomercio.pe/resizer/4v7yOaU4VXQSLKYL6t3lKpGr3Yc=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/PSM4TK7OTZC4XHBUTBROE6ZBOI.jpg',
            6: 'https://productplacementblog.com/wp-content/uploads/2022/04/Monopoly-Board-Game-in-Heartstopper-S01E05-Friend-2022.jpg',
            7: 'http://pm1.narvii.com/6814/66d1c2c0fe834e0eadaf578b41c3edb00c5a5598v2_00.jpg',
            8: 'https://3.bp.blogspot.com/-TLCMEC2e1C8/WXkMKenGsxI/AAAAAAABPN4/46-OcQr4HGIYcIkIImOyRYMxZ745zzfHwCLcBGAs/s640/00001.jpg',
            9: 'https://tribunademinas.com.br/wp-content/uploads/2018/02/st-discovery-3-e1519155342581.jpg',
            10: 'https://s2.glbimg.com/XuyBI614bNISW8T3KDhAo3TG9nE=/620x520/smart/e.glbimg.com/og/ed/f/original/2020/10/16/as-casas-que-mais-amamos-elite-cayetana.jpg'
        },
        answers: {
            1: {
                1: 'Dark',
                2: 'Lucifer',
                3: 'Supernatural',
                4: 'Black Mirror',
                5: 'Stranger Things'
            },
            2: {
                1: 'The Umbrella Academy',
                2: 'Arqueiro',
                3: 'The Boys',
                4: 'Jessica Jones',
                5: 'Demolidor',
            },
            3: {
                1: 'Outlander',
                2: 'The Witcher',
                3: 'Senhor dos Anéis',
                4: 'Vikings',
                5: 'Game of Thrones'
            },
            4: {
                1: 'Round 6',
                2: 'Alice in Borderland',
                3: '3%',
                4: 'Extracurricular',
                5: 'Black Mirror',
            },
            5: {
                1: 'Elite',
                2: 'La casa de Papel',
                3: 'Round 6',
                4: 'Assalto ao Banco central',
                5: 'Vis a Vis',
            },
            6: {
                1: 'Sex Education',
                2: 'Young Royals',
                3: 'Gatunas',
                4: 'HeartStopper',
                5: 'Dash and Lili',
            },
            7: {
                1: 'Lucifer',
                2: 'Supernatural',
                3: 'Arrow',
                4: 'The Boys',
                5: 'A Ordem',
            },
            8: {
                1: 'Narcos',
                2: 'Breaking Bad',
                3: 'Lost',
                4: 'Doctor Who',
                5: 'WestWorld',
            },
            9: {
                1: 'Mandaloriano',
                2: 'Star Trek: Discovery',
                3: 'Jornada nas Estrelas: Voyager',
                4: 'Perdidos no Espaço',
                5: 'Doctor Who',
            },
            10: {
                1: 'Eu Nunca...',
                2: 'Lúcifer',
                3: 'Elite',
                4: 'Control Z',
                5: 'La Casa de Papel',
            }
        },
        correctAnswers: {
            1: '5',
            2: '3',
            3: '5',
            4: '1',
            5: '2',
            6: '4',
            7: '2',
            8: '2',
            9: '2',
            10: '3'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    reiniciar = () => {
       document.location.reload()
   } 

    render(){
        
        let { quiestions, imagem, answers, correctAnswer, clickedAnswer, step, score, reiniciar } = this.state;
        return(
            <div id='questao'>
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            imagem={<img src = {imagem[step]}/>}
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Proxima</button>
                    </>) : (
                        <div className="finalPage">
                            <img className='img' src='https://i.imgur.com/YIxwjNS.png'/>
                            <h1>Você completou o ROTANIKA.TV!</h1>
                            <p>Seus Pontos: {score} de {Object.keys(quiestions).length}</p>
                            <p>Valeu</p>
                            <center>
                            <button onClick={()=> this.reiniciar(reiniciar)} className='botão'>VOLTAR AO INICIO</button>
                            </center>
                        </div>
                    )
                }
            </div>
            </div>
        );
    }
}