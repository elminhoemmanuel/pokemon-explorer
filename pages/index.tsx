import PokemonList from '@/components/PokemonList'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <div >
            <Head>
                <title>Pokemon Explorer - Find out details about your favourite pokemon</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
                <PokemonList />
            </div>

        </div>
    )
}
