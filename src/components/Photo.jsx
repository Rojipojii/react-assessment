import classes from "./Photo.module.css";

export const Photo = (props) => {
  console.log(props);
  return (
    <div className={classes.container}>
      <img src={props.thumbnailUrl} className={classes.image} alt={props.title} />
      <p className={classes.caption}>{props.title}</p>
    </div>
  );
};
