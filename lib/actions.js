'use server';
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvaliText(text)
{
   return !text||text.trim()==='';
}
export async function shareMeal(formData)
  {
    const meal={
      title: formData.get('title'),
      summary:formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator:formData.get('name'),
      creator_email:formData.get('email')
    };
    if(isInvaliText(meal.title) ||
       isInvaliText(meal.summary) || 
       isInvaliText(meal.instructions)||
       isInvaliText(meal.creator)||
       isInvaliText(meal.creator_email)||
       !meal.creator_email.includes('@')|| 
       !meal.image||meal.image.size===0)
       {
        throw new Error('Invalid input');
       }
    await saveMeal(meal);
      revalidatePath('/meals')
    redirect('/meals');
  }