import Link from 'next/dist/client/link'
import styles from '../../styles/Ninjas.module.css'


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: {ninjas: data}
    }
}   

const Ninjas = ({ninjas}) => {
    return ( 
        <div>
            <h1>Ninjas All</h1>

            {ninjas.map(ninja =>(
                <Link href={'/ninjas/'+ninja.id} key={ninja.id}>
                    <a className={styles.single}>{ninja.name}</a>
                </Link>
            ))}
        </div>
     );
}
 
export default Ninjas;