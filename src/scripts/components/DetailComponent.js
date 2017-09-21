class DetailComponent extends React.Component {
        constructor(props, context) {
            super(props, context)

            this.state = {

            }
        }
        componentWillMount() {

        }
        render() {
            console.log(this)
            return ( 
                <div>
                    <p> Detail component</p>
                    
                </div>
            )
        }
    }
    //定义默认属性
DetailComponent.defaultProps = {

}



export default DetailComponent