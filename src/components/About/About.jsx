import css from './About.module.css'

const About = () => {
    return (
        <div className={css.AboutContainer}>
            <h1 className={css.AboutTitle}>Південний центр нерухомості</h1>
            <p className={css.AboutInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Iusto quibusdam qui illo quam, fugiat optio soluta,
                totam minus nesciunt maxime in sint illum quod inventore
                repellendus labore explicabo ipsum nihil!</p>
        </div>
    )
}

export default About;