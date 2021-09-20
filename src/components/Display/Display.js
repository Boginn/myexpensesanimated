import { Sum, Item, List, Wrapper, RemoveButton, ItemWrapper } from './styles';

function Display(props) {
  const { sum, array, onRemove } = props;

  return (
    <Wrapper>
      <Sum>
        <span>
          Total
          {!!array.length && <span>({array.length})</span>}
        </span>
        <span>{sum}</span>
      </Sum>
      <List>
        {array.map((item) => (
          <ItemWrapper key={item.id}>
            <Item>
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
