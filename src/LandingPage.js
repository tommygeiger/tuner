import Login from './Login'
import Title from './Title'
import Footer from './Footer'
import { Box } from '@material-ui/core'


function LandingPage() {

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <div className="LandingPage">          

          <div className="Middle">
            <Title variant="text"/>
            <br/><br/>
            <Login />
          </div>
          
          <div className="Bottom">
            <Footer />
          </div>
           
      </div>
    </Box>
  )
}

export default LandingPage