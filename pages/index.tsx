import type { NextPage } from 'next'
import { Key } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PokemonCard from '../components/PokemonCard'

export interface pk {
  name: string,
  url: string,
}

export async function getServerSideProps(context: any) {  

  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  const data = await response.json()

  return {
    props: { data }
  }
}

const Home: NextPage = ({ data }: any) => {

  console.log(data.results)

  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className='flex flex-wrap w-4/6 justify-center'>
          {data.results.map((pk: pk, index: Key) => ( <PokemonCard {...pk} key={index}/> ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
