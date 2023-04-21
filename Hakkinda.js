import { hakkinda_icerik } from "./Icerikler";


const Hakkinda = () => {
    return (
        <>
            <div className="container">
                <div className="row py-5">
                    <div className="col-auto">
                        {hakkinda_icerik.map((eleman, index) => (
                            <p>{eleman}</p>
                        ))}
                    </div>
                    <div className="col-auto py-5" >
                        <img src="/images/hakkinda.jpg" alt="katılımcı_resmi" style={{width:"700px",height:"500px",marginLeft:"33%"}} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Hakkinda;