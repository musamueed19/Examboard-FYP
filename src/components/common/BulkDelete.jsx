"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { mutate } from 'swr';
import { useRouter } from 'next/navigation';
import DeleteDialog from './DeleteDialog';

export default function BulkDelete({ ids, label }) {
  const router = useRouter();
  const [isOpen, SetIsOpen] = useState(false);

  const onCancel = () => {
    SetIsOpen(false)
  }
  const onBtnClick = () => {
    SetIsOpen(true)
  }
  const handleBulkDelete = async (event) => {
    event.preventDefault(); 

    if (!ids || ids.length === 0) {
      alert('No ID provided for deletion');
      return;
    }

    console.log(ids);
    const queryString = ids.map(id => `id=${id}`).join('&');

    try {
      const response = await fetch(`http://localhost:3000/semesters?${queryString}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Items deleted successfully');
        mutate('http://localhost:3000/semesters'); 
        router.push('/semesters')

      } else {
        console.error('Failed to delete items', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting items', error);
    }
  };

  return (
      <>
          {isOpen ? 
               <form onSubmit={handleBulkDelete}>
                 <DeleteDialog title={`${label}s`} 
                 onCancel={(e) => {
                  e.preventDefault(); 
                  onCancel(); 
                }}
                 />
                 
               </form> :
               
               <button onClick={onBtnClick} className="scale-[0.65] md:scale-[0.7] lg:scale-100 hover:bg-[#ffc5c5] p-2 rounded-md">
               <Image src="/delete.svg" width={30} height={30} alt="delete icon" />
             </button>
          }
      </>
  );
}
