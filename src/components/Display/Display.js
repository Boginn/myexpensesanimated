import { Sum, Item, List, Wrapper, RemoveButton, ItemWrapper } from './styles';

function Display(props) {
  const { sum, array, onRemove } = props;

  return (
    <Wrapper>
      <Sum>
        <span>Total</span>
        <span>{sum}</span>
      </Sum>
      <List>
        {array.map((item) => (
          <ItemWrapper>
            <Item key={item.id}>
              {/* Warning: Each child in a list should have a unique "key" prop. */}
              <span>{item.name}</span>

              <span>{item.amount}</span>
            </Item>
            <RemoveButton type="button" onClick={() => onRemove(item.id)}>
              &#10060;
            </RemoveButton>
          </ItemWrapper>
        ))}
      </List>
    </Wrapper>
  );
}

export default Display;
