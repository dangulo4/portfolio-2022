import { useContext } from 'react'
import Cover from '../../img/testimonials-bg.jpg'
import Github from '../../img/icons/github.svg'
import LinkedIn from '../../img/icons/linkedin.svg'
import Instagram from '../../img/icons/instagram.svg'
import YouTube from '../../img/icons/youtube.svg'
import { ThemeContext } from '../../context'
import './intro.css'

const Intro = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <main className='intro' id='intro'>
      <section className='intro-left'>
        <div className='intro-left-wrapper'>
          <h2 className='intro-greeting'>Hello, my name is</h2>
          <h1 className='intro-name'>Daniel Angulo</h1>
          <div className='social-icons'>
            <a
              style={{
                backgroundColor: darkMode && '#e9967a',
              }}
              href='https://github.com/dangulo4'
              className='social-icon'
              target='_blank'
              rel='noreferrer'
            >
              <img src={Github} alt='Github' />
            </a>
            <a
              style={{ backgroundColor: darkMode && 'lightblue' }}
              href='https://www.linkedin.com/in/daniel-angulo-0b7a3781/'
              className='social-icon'
              target='_blank'
              rel='noreferrer'
            >
              <img src={LinkedIn} alt='LinkedIn' />
            </a>
            <a
              style={{ backgroundColor: darkMode && '#e9967a' }}
              href='https://www.instagram.com/deecoys51/'
              className='social-icon'
              target='_blank'
              rel='noreferrer'
            >
              <img src={Instagram} alt='Instagram' />
            </a>
            <a
              style={{ backgroundColor: darkMode && 'lightblue' }}
              href='https://www.youtube.com/channel/UCRKOrDOta1dCRL1-Blq4OwA/videos?view_as=subscriber'
              className='social-icon'
              target='_blank'
              rel='noreferrer'
            >
              <img src={YouTube} alt='YouTube' />
            </a>
          </div>

          <div className='intro-title'>
            <div className='intro-title-wrapper'>
              <div className='intro-title-item'>Full Stack Developer</div>
              <div className='intro-title-item'>Web Developer</div>
              <div className='intro-title-item'>Backend Developer</div>
              <div className='intro-title-item'>Front End Developer</div>
              <div className='intro-title-item'>Team Player</div>
            </div>
          </div>
          <p className='intro-desc'>
            It has been my passion to build modern web application and
            contribute to our web community. I have a diverse set of programming
            skills in full stack web application development. I strive for clean
            content and simple structure with thoughtful design.
          </p>
        </div>
        <svg
          width='75'
          height='75'
          viewBox='0 0 75 75'
          fill='none'
          stroke='black'
          className='intro-scroll'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='scroll'>
            <path
              id='Vector'
              d='M40.5 15L34.5 9L28.5 15'
              strokeWidth='3'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              id='Vector_2'
              d='M28.5 24L34.5 30L40.5 24'
              strokeWidth='3'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <g id='Group'>
              <path
                id='Vector_3'
                d='M9 37.5H60'
                strokeWidth='3'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
            <path
              id='Vector_4'
              d='M34.5 27V9'
              strokeWidth='2.9895'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <g id='Group_2'>
              <path
                id='Vector_5'
                d='M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z'
                strokeWidth='3'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </g>
        </svg>
      </section>
      <section className='intro-right'>
        <img src={Cover} alt='cover' className='intro-img' />
      </section>
    </main>
  )
}

export default Intro
