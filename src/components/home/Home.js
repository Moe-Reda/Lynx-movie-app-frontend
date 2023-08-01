import Hero from '../hero/Hero';
import Header from '../header/header';

function Home({movies}) {
    return (
        <div>
            <Header/>
            <Hero movies={movies}/>
        </div>
    )
}

export default Home;
