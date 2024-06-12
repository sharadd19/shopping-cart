import { Form } from "react-router-dom";
import styles from "./ProductSearch.module.css"
export default function ProductSearch({ q, submit}) {
  

  return (
    <div className={styles.searchContainer}>
      <img src="" alt="" className="icon" />

      <Form id="search-form" role="search">
        <input
          id="q"
          name="q"
          type="search"
          placeholder="Search"
          className={styles.search}
          defaultValue={{q}}
          onChange={(e) => {
            submit(e.currentTarget.form)
            
          } }
        />
      </Form>
    </div>
  );
}
