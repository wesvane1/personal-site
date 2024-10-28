import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

export default function NoPage() {
  return(
    <>
      <Header/>
      <p>It seems as though you have come to a page that does not exist.</p>
      <p>Please roll this d20 to determine your fate</p>
      <Footer/>
    </>
  )
}