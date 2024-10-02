import { notFound } from "next/navigation";

export default function ConceptId({params}){
    if(params.conceptId > 20){
        notFound();
    }
    return <h1>Docs Page feature {params.featureId} - {params.conceptId}</h1>
}