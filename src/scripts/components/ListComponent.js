class ListComponent extends React.Component {
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
                    List component
                </div>
            )
        }
    }
    //定义默认属性
ListComponent.defaultProps = {

}



export default ListComponent