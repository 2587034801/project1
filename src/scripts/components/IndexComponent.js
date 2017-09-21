class IndexComponent extends React.Component {
        constructor(props, context) {
            super(props, context)

            this.state = {

            }
        }
        componentWillMount() {
             console.log(1);
        }
        render() {
            console.log(this)
            return ( 
                <div>
                     Index component
                   
                </div>
            )
        }
    }
    //定义默认属性
IndexComponent.defaultProps = {

}



export default IndexComponent