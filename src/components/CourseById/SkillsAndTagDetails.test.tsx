import React from 'react';
import { render, screen } from '@testing-library/react';
import { SkillsAndTagsDetails } from './SkillsAndTagsDetails';

describe('SkillsAndTagsDetails', () => {
  it('renders a list of tags when item is an array', () => {
    const item = ['tag1', 'tag2', 'tag3'];

    const tagElements = screen.getAllByRole('listitem');
    expect(tagElements).toHaveLength(item.length);
    tagElements.forEach((element, index) => {
      expect(element.textContent).toBe(item[index]);
    });
  });

  it('renders a "Missing" message when item is undefined', () => {
    const messageElement = screen.getByText('Missing');
    expect(messageElement).toBeInTheDocument();
  });

  it('renders a "Missing" message with the item type when item is a string', () => {
    const item = ['string item'];
    render(<SkillsAndTagsDetails item={item} />);
    const messageElement = screen.getByText(`Missing ${typeof item}`);
    expect(messageElement).toBeInTheDocument();
  });
});
