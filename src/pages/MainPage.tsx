import React from 'react';
import { useState, useEffect } from 'react';
import { noteSelector, addNote, archiveNote, deleteNote, editNote, deleteAllNotes, archiveAllNotes } from '../redux/notes/noteSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { IColumnType } from '../types/tableData';
import { IMainTableData, ISummaryTableData } from '../types/tableData';
import INote from '../types/noteInterface';
import NotesState from '../types/notesStateInterface';
import { Table } from '../components/Table/Table';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import { notesToMainTableData, notesToSummaryTableData } from '../utils/notesToTableData';
import extractDateFromContent from '../utils/extractDate';
import categories from '../constants/noteCategories';
import './mainpage.css';

function Main() {
  const [notes, setNotes] = useState<NotesState>({notes: []});
  const [mainTableData, setMainTableData] = useState<IMainTableData[]>([]);
  const [summaryTableData, setSummaryTableData] = useState<ISummaryTableData[]>([]);
  const [showArchived, setShowArchived] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<{title: string; note: INote | null; toUpdate: boolean}>({
    title: '',
    note: null,
    toUpdate: false
  });
  const selectedNotes = useAppSelector(noteSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setNotes(selectedNotes);
    setMainTableData(notesToMainTableData(selectedNotes, showArchived));
    setSummaryTableData(notesToSummaryTableData(selectedNotes));
  }, [selectedNotes, showArchived]);

  const handleArchiveAllClick = () => dispatch(archiveAllNotes());

  const handleDeleteAllClick = () => dispatch(deleteAllNotes());

  const handleOpenAddModal = () => {
    setIsModalOpen(true);
    setFormData({title: 'Add note', note: null, toUpdate: false});
  };

  const handleOpenEditModal = (noteId: number) => {
    setIsModalOpen(true);
    const noteToUpdate = notes.notes[notes.notes.findIndex(note => note.id === noteId)];
    setFormData({title: 'Update note', note: noteToUpdate, toUpdate: true});
  };

  const handleAddFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.note) {
      const newNote: INote = {
        id: notes.notes.length !== 0 ? notes.notes[notes.notes.length - 1].id + 1 : 1,
        name: formData.note.name,
        created: new Date().toISOString(),
        category: formData.note.category,
        content: formData.note.content,
        dates: extractDateFromContent(formData.note.content),
        isArchived: false
      };
      dispatch(addNote(newNote));
    }
  }

  const handleEditFormSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if (formData.note) {
      formData.note.dates = extractDateFromContent(formData.note.content);
      dispatch(editNote(formData.note));
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      note: {
        ...(prevFormData.note || {}),
        [name]: value,
      } as INote,
    }));
  }

  const handleDeleteClick = (id: number) => dispatch(deleteNote(id));

  const handleArchiveClick = (id: number) => dispatch(archiveNote(id));

  const handleShowArchiveClick = () => setShowArchived(!showArchived);

  const handleCloseModal = () => setIsModalOpen(false);

  const columnsMain: IColumnType<IMainTableData>[] = [
    {
      key: 'icon',
      title: '',
    },
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'created',
      title: 'Created',
    },
    {
      key: 'category',
      title: 'Category',
    },
    {
      key: 'content',
      title: 'Content',
    },
    {
      key: 'dates',
      title: 'Dates',
    },
    {
      key: 'buttons',
      title: '',
      renderHeaderCell: () => (
        <div className='table_header_btn-wrap'>
          <Button onClick={handleArchiveAllClick} iconName='archive' color='white'/>
          <Button onClick={handleDeleteAllClick} iconName='delete' color='white'/>
        </div>
      ),
      renderBodyCell: (data) => (
        <div className='table_body_btn-wrap'>
          <Button onClick={() => handleOpenEditModal(data.id)} iconName='edit' color='#7a7a7a'/>
          <Button onClick={() => handleArchiveClick(data.id)} iconName='archive' color='#7a7a7a'/>
          <Button onClick={() => handleDeleteClick(data.id)} iconName='delete' color='#7a7a7a'/>
        </div>
      )
    }
  ];

  const columnsSummary: IColumnType<ISummaryTableData>[] = [
    {
      key: 'icon',
      title: '',
    },
    {
      key: 'categoryName',
      title: 'Category Name'
    },
    {
      key: 'active',
      title: 'Active'
    },
    {
      key: 'archived',
      title: 'Archived'
    }
  ];

  return (
    <div className='main-page__container'>
      <Table data={mainTableData} columns={columnsMain}></Table>
      <div className='notes__btn-container'>
        <Button onClick={handleOpenAddModal} title='Create note' className='notes__button'/>
        <Button onClick={handleShowArchiveClick} title={showArchived ? 'Show active' : 'Show archive'} className='notes__button'/>
      </div>
      <Table data={summaryTableData} columns={columnsSummary}></Table>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={formData.title}>
        <form onSubmit={formData.toUpdate ? handleEditFormSubmit : handleAddFormSubmit} className='modal__form'>
          <label className="modal__form_label"> Name: </label>
          <input className="modal__form_input" id="name" name="name" type="text" value={formData.note?.name || ''} onChange={handleChange}/>
          <label className="modal__form_label"> Category: </label>
          <select className="modal__form_input" id="category" name="category" value={formData.note?.category || ''} onChange={handleChange}>
            <option value=''></option>
            {
              Object.values(categories).map((category) => (
                <option key={category} value={category}>{category}</option>
              ))
            }
          </select>
          <label className="modal__form_label">Content</label>
          <textarea className="modal__form_input" id="content" name="content" rows={5} cols={33} value={formData.note?.content || ''} onChange={handleChange}/>
          <button type="submit" className='modal__form_btn'>{formData.title}</button>
        </form>
      </Modal>
    </div>
  )
}

export default Main