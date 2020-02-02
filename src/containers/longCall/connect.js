import { connect } from 'react-redux'
import { startLoadTickerPrice, startLoadOptionChain } from '../../store/actions/securities'

const mapDispatchToProps = {
    startLoadTickerPrice,
    startLoadOptionChain
}


const mapStatetoProps = state => ({
    tickerPrice : state.securities.tickerPrice
})

export default connect(mapStatetoProps, mapDispatchToProps)