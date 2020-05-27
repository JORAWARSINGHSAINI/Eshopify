import React, { Component } from 'react'
import {Paper, Typography, Grid, CssBaseline} from '@material-ui/core'
import MaterialCard from './MaterialCard'
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import Skeleton from '@material-ui/lab/Skeleton';


export class Home extends Component {
    render() {
        const skeletonCard=(<Grid item >
        <Skeleton animation="wave" variant="text" width={380} height={40}/>
        <Skeleton animation={false} variant="rect" width={380} height={368} />

        
        </Grid>)
    
    
            if(!this.props.electronics || !this.props.fashionwear)
                return (
            <Grid container spacing={3} style={{marginTop:60}}>
                
                {skeletonCard}
                {skeletonCard}
                {skeletonCard}
                {skeletonCard}
                {skeletonCard}
                {skeletonCard}
                {skeletonCard}
                {skeletonCard}
                {skeletonCard}
                {skeletonCard}            
            </Grid>
                )
        const Background1="https://static9.depositphotos.com/1586254/1106/i/950/depositphotos_11065945-stock-photo-electronic-components-on-white-background.jpg"
        const Background2="https://i.pinimg.com/originals/98/8c/1e/988c1e07f1f6ca0676a31f8fb1029b09.png"
        
        
        
        const items=['Electronics','FashionWear'].map((item,index)=>{
            let Background=(index%2===0)?
            Background1:Background2
            return (
                <div key={index} style={{marginBottom:50,marginLeft:10,marginRight:10}}>
                    <Paper elevation={3} style={{padding:20,marginTop:40,marginBottom: 30,paddingLeft: 50,backgroundImage: `url(${Background})` } } ><Typography variant="body1" color="primary" align="left">{item}</Typography></Paper>
                    <Grid container   style={{ marginTop:40}} >
                    {
                        this.props[item.toLowerCase()].map((product,index)=>{
                            return(
                                
                                <Grid key={index} item lg={3} sm={12} xs={12} md={6}  >
                                <MaterialCard  product={product}></MaterialCard>
                                </Grid>
                               
                            )
                        })
                    }
                     </Grid>
                    <CssBaseline></CssBaseline>
                </div>
            )
        })

        return (
            <div>
                {items}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   
    return ({
      electronics: state.firestore.ordered?state.firestore.ordered.electronics:null ,
      fashionwear: state.firestore.ordered?state.firestore.ordered.fashionwear:null
     
     } )
  
  }
  
  export default compose(
    connect(mapStateToProps),
  firestoreConnect([
    {collection: 'electronics'},
    {collection: 'fashionwear'}
  ])
      )(Home)
  