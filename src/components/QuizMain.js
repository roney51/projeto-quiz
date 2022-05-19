import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';
import Inicio from './Inicio';

export default class Quiz extends Component {

   
    state = {
        quiestions: {
            1: 'Que desenho é esse? ',
            2: 'Que desenho é esse?',
            3: 'Que Desenho é esse?',
            4: 'Que Desenho é esse?',
            5: 'Que Desenho é esse?',
            6: 'Que Desenho é esse?',
            7: 'Que Desenho é esse?',
            8: 'Que Desenho é esse?',
            9: 'Que Desenho é esse?',
            10: 'Que Desenho é esse?',
        },
        imagem: {
            1: 'https://cdnb.artstation.com/p/assets/images/images/004/437/471/large/lucas-schoenherr-7.jpg?1483749591&dl=1',
            2: 'https://pm1.narvii.com/6709/b8a61f85bc52b22ad30b8f873f41e685c50d3ff4_hq.jpg',
            3: 'https://i.pinimg.com/originals/e4/35/33/e43533b7073085d0dbb1becf68363e69.jpg',
            4: 'https://www.apaixonadosporseries.com.br/wp-content/arquivos/2013/08/springfiels.jpg',
            5: 'https://4.bp.blogspot.com/-qOhCgMJvsPY/VxkW1ZBBrZI/AAAAAAAANwA/GNtWUUpfXg8rYfDBPF2SSadkF64CLRuMQCLcB/s1600/bg%2B04.png',
            6: 'https://p4.wallpaperbetter.com/wallpaper/32/742/576/gumball-cartoon-network-cartoon-hd-wallpaper-preview.jpg',
            7: 'https://m.media-amazon.com/images/M/MV5BYWEzYmYzNDUtYTlmZi00MzcwLWJiZWQtMGFmZDExNjA1MmZiXkEyXkFqcGdeQXVyNjIzMjgxMDY@._V1_.jpg',
            8: 'https://i.pinimg.com/originals/08/29/7f/08297f0d0abf4fb0ba7344102603d352.jpg',
            9: 'https://i.pinimg.com/474x/f2/ee/6d/f2ee6d67bedf7f27c91afbfcef1a7275.jpg',
            10: 'https://i.pinimg.com/originals/c5/e1/20/c5e120fbbfeed95928cd4d594d641335.png'
        },
        answers: {
            1: {
                1: 'Tromba trem ',
                2: 'Historietas Assombradas para Crianças Malcriadas',
                3: 'Turma da Mônica',
                4: 'Irmão do Jorel',
                5: 'Phineas e Ferb'
            },
            2: {
                1: 'Sem maturidade para isso',
                2: 'Hora de aventura',
                3: 'Apenas um Show',
                4: 'Meu amigo da Escola é um Macaco',
                5: 'Johnny Test',
            },
            3: {
                1: 'A mansão Foster para Amigos imaginários',
                2: 'Apenas Um Show',
                3: 'Hora de aventura',
                4: 'As meninas Super Poderosas',
                5: 'Titio Avô'
            },
            4: {
                1: 'Os Simpsons',
                2: 'Desencanto',
                3: 'Bobs Burguer',
                4: 'Futurama',
                5: 'South Park',
            },
            5: {
                1: 'Popeye',
                2: 'Lelê e Linguiça',
                3: 'Turma da Mônica',
                4: 'Pica-Pau',
                5: 'Clifford o grande cão gigante',
            },
            6: {
                1: 'Gravity Falls',
                2: 'O Incrível Mundo de Gumball',
                3: 'Star vs as Forças do Mal',
                4: 'Kick Buttowski: Um Projeto de Dublê',
                5: 'Steven Universo',
            },
            7: {
                1: 'Big Mouth',
                2: 'A Lei de Milo Murphy',
                3: 'Phineas e Ferb',
                4: 'Turma do Bairro',
                5: 'Hora de Aventura',
            },
            8: {
                1: 'Padrinhos Magicos',
                2: 'Danny Phantom',
                3: 'Jonny Test',
                4: 'As Aventuras de Jimmy Neutron',
                5: 'The Loud House',
            },
            9: {
                1: 'As Pista de Blue',
                2: 'O Pequeno Reino de Ben e Holly',
                3: 'Dora a Aventureira',
                4: 'Pocoyo',
                5: 'Peppa Pig',
            },
            10: {
                1: 'Barbie e as 12 princesas bailarinas',
                2: 'Barbie e o castelo de diamante',
                3: 'Barbie e a magia de Alados',
                4: 'Barbie e a Princesa da Ilha',
                5: 'Barbie e as Três Mosqueteiras',
            },
        },
        correctAnswers: {
            1: '4',
            2: '3',
            3: '4',
            4: '1',
            5: '3',
            6: '2',
            7: '3',
            8: '1',
            9: '5',
            10: '1',
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