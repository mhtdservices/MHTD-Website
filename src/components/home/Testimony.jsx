import goals from "../../images/testimony.jpg"
import favorite from "../../images/favorite.png"


export default function Testimony() {

    return(
        <div className="d-flex flex-column justify-content-center p-4 mt-3"
        style={{
            backgroundImage: `url(${goals})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            minHeight: '80vh', 
        }}>
            <h3 className="mt-3" style={{ color:"black" }} >TEMOIGNAGE</h3>
            <div className="mt-3" >
            <img src={favorite}/>
            <img src={favorite}/>
            <img src={favorite}/>
            <img src={favorite}/>
            <img src={favorite}/>
            </div>
            
            <p className="m-5"  style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color:"white" , padding:"25px"}} >"Je tiens à exprimer ma profonde gratitude envers l'entreprise MHTD pour 
            la qualité exceptionnelle du kit de pompage solaire que j'ai récemment acheté. 
            La performance et l'efficacité de votre produit dépassent mes attentes, 
            et je tiens à recommander chaleureusement MHTD à tous ceux qui recherchent des solutions solaires fiables et performantes."
            </p>
        </div>

        
    )
    
}