import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "..";

const Pages = observer(() => {
   const {item} = useContext(Context)
   const pageCount = Math.ceil(item.totalCount / item.limit)
   const pages = []
   for (let i = 0; i < pageCount; i++){
      pages.push(i + 1)
   }
   return(
      <Pagination className="mt-5">
         {pages.map(page =>
            <Pagination.Item onClick={() => item.setPage(page)} key={page} active={item.page === page}>{page}</Pagination.Item>
         )}
      </Pagination>
   )
})

export default Pages;