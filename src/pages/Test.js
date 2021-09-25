import drawerImage from "../../resources/images/drawer.jpg";

const imagenDeFondo = () => {
    const styles = (theme) => ({
        drawerPaper: {
          backgroundImage: `url(${drawerPaper})`,
        },
      }
      
      
      );
      return (
          <Drawer classesName={classes.drawerPaper} />
      ) 
}

export default imagenDeFondo;