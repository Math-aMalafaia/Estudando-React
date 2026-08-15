import "./Project.css"

function Project(props) {
    const project = props.project
    return (
        <>
            <section className="Project">
                <h2>Projeto</h2>
                <ul className="Project-list">

                    {
                        project.map((projectNow) => {
                            return(
                                <li>
                                    <a href={projectNow.GitHUb}>GitHUb</a>
                                    <img src={projectNow.caminhoimg} alt="" />
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </>
     )
}
export default Project;