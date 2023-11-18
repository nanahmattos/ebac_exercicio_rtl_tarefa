import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })
    test('Deve renderizar o dois comentários', () => {
        render(<PostComment />)
        const firstComment = screen.getByTestId('text-comenta')
        const buttonComment = screen.getByTestId('btn-comenta')
        //primeiro
        fireEvent.change(firstComment, {target: { value: "My first comment"}})
        fireEvent.click(buttonComment)
        //secundo
        fireEvent.change(firstComment, {target: { value: "My second comment"}})
        fireEvent.click(buttonComment)
        
        expect(screen.getAllByTestId('allComments')).toHaveLength(2)
    })
})
