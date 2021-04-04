import React from 'react';
import Project from 'components/Project';
import { render, screen } from '@testing-library/react';

describe('# Project Item', () => {
  beforeEach(() => {
    render(
      <Project.Item 
        description='Descrição do item que foi criado'
        name="Nome do projeto"
      />
    );
  });

  it('should render properly', async () => {
    const item = await screen.findByTestId('item');
    expect(item).toMatchSnapshot();
  });
});
