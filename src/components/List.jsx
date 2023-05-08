import Card from "./Card";

const List = (props) => {
  return (
    <>
      {props.userInfos.length > 0 ? (
        <>
          {props.userInfos.map((info) => (
            <Card css={"card-mt"} key={info.email}>
              <div className="list">
                <p>Name : {info.name}</p>
                <p>From : {info.live}</p>
                <p>Email : {info.email}</p>
              </div>
            </Card>
          ))}
        </>
      ) : (
        <>
          <Card css={"card-mt"}>
            <p>Add a new user right now !</p>
          </Card>
        </>
      )}
    </>
  );
};

export default List;
