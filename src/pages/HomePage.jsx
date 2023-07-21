import PageNav from '../components/PageNav';
import classes from './HomePage.module.css';

const HomePage = () => (
  <div className="container">
    <PageNav />
    <div className={classes.homePageContainer}>
      <h1 className={classes.header}>WelCome to our Page!</h1>
      <p className={classes.homeText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        deleniti excepturi nihil totam temporibus numquam consectetur
        perferendis ipsum iusto! Corporis, quos exercitationem excepturi earum
        dolorem eligendi incidunt neque! Facere, error?Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Laboriosam facere voluptates ducimus
        consequuntur perspiciatis ratione labore obcaecati, culpa quo ex? Sint
        in similique aperiam recusandae maiores est voluptas cum animi. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deleniti
        excepturi nihil totam temporibus numquam consectetur perferendis ipsum
        iusto! Corporis, quos exercitationem excepturi earum dolorem eligendi
        incidunt neque! Facere, error?Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Laboriosam facere voluptates ducimus consequuntur
        perspiciatis ratione labore obcaecati, culpa quo ex? Sint in similique
        aperiam recusandae maiores est voluptas cum animi.
      </p>
      <p className={classes.homeText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        deleniti excepturi nihil totam temporibus numquam consectetur
        perferendis ipsum iusto! Corporis, quos exercitationem excepturi earum
        dolorem eligendi incidunt neque! Facere, error?Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Laboriosam facere voluptates ducimus
        consequuntur perspiciatis ratione labore obcaecati, culpa quo ex? Sint
        in similique aperiam recusandae maiores est voluptas cum animi. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deleniti
        excepturi nihil totam temporibus numquam consectetur perferendis ipsum
        iusto! Corporis, quos exercitationem excepturi earum dolorem eligendi
        incidunt neque! Facere, error?Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Laboriosam facere voluptates ducimus consequuntur
        perspiciatis ratione labore obcaecati, culpa quo ex? Sint in similique
        aperiam recusandae maiores est voluptas cum animi.
      </p>
    </div>
  </div>
);
export default HomePage;
