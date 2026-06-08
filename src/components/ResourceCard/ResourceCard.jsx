const ResourceCard = (props) => {
    return (
        <article className="card">
            <div className="card-img">
                <img src={props.imageUrl} alt={`${props.title} logo`} className="card-icon" loading="lazy" />
            </div>
            <div className="card-body">
                <p className={`tag tag-${props.catClass}`}>
                    {props.category}
                </p>
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text">{props.description}</p>
                <a
                    href={props.url}
                    className={`btn btn-${props.catClass}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    Learn More
                </a>
            </div>
        </article>
    )
}

export default ResourceCard