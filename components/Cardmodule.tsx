import './Cardmodule.css';

const Cardmodule = ({title = '', description = ''}) => {
    
    return (
            <div className="card">
                <div>

                    <h2 className='titlebox'>{title}</h2>

                    <p className='textbox'>{description}</p>

                </div>
            </div>
    )
}
export default Cardmodule