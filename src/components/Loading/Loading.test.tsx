import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loader } from './Loading';

describe('Loader', () => {
  it('renders the loading text and spinner when visible prop is true', () => {
    render(<Loader height="50" width="50" radius="25" visible={true} />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
    expect(screen.getByLabelText('three-dots-loading')).toBeInTheDocument();
  });

  it('renders nothing when visible prop is false', () => {
    render(<Loader height="50" width="50" radius="25" visible={false} />);
    expect(screen.queryByText('Loading')).toBeNull();
    expect(screen.queryByLabelText('three-dots-loading')).toBeNull();
  });
});
