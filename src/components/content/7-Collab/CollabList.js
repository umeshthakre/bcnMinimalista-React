
function CollabList({ collabList }) {
    return collabList.map((collab) => {
      return (
        <div key={collab.id} className="col-md-5 m-1">
          <div className="flex flex-column flex-basis-30 bg-4">
            <a href={collab.src} target="_blank" rel="noreferrer">
              <p className="flex-text">{collab.name}</p>
            </a>
          </div>
        </div>
      );
    });
  }

  export default CollabList