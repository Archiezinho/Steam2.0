import { useRouter } from "next/router";

function jogo(){
    const router = useRouter();
    const { jogo } = router.query;
    
    return <div>{jogo}</div>
}

export default jogo;