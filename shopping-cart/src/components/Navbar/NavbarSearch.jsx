import { Form } from "react-router-dom";
export default function NavbarSearch({ q, submit}) {
  

  return (
    <div className="search">
      <img src="" alt="" className="icon" />

      <Form id="search-form" role="search">
        <input
          id="q"
          name="q"
          type="search"
          placeholder="Search"
          className="search-query"
          defaultValue={{q}}
          onChange={(e) => {
            submit(e.currentTarget.form)
            
          } }
        />
      </Form>
    </div>
  );
}
