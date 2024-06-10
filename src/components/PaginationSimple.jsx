import { createSearchParams, useNavigate } from 'react-router-dom';

export const PaginationSimple = ({page,setPage,path}) => {
    const navigate = useNavigate();
    
    const nextPage = ()=>{
        setPage(page+1);
        navigate({
            pathname:path,
            search:createSearchParams({
                page:(page+1)
            }).toString(),
        });
    }
    const prevPage = ()=>{
        if(page>1){
            setPage(page-1);
            navigate({
                pathname:path,
                search:createSearchParams({
                    page:(page-1)
                }).toString(),
            });
        }
    }

    return (
    <div>
        <button className='btn' onClick={prevPage}>Anterior</button>
        <button className='btn' onClick={nextPage}>Siguiente</button>
    </div>
  )
}
