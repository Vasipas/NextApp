/* eslint-disable @typescript-eslint/no-explicit-any */
import clientPromise from '@/lib/mongodb'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = await clientPromise
    const db = client.db('sample_mflix')
    const movies = await db
      .collection('movies')
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray()
    return { props: { movies: JSON.parse(JSON.stringify(movies)) } }
  } catch (error) {
    console.error(error)
    return { props: { movies: [] } }
  }
}

const MoviesPage = ({ movies }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      {movies.map((movie: any) => (
        <>
          <h2>{movie.title}</h2>
          <h3>{movie.metacritic}</h3>
          <p>{movie.plot}</p>
        </>
      ))}
    </div>
  )
}

export default MoviesPage
