import { useEffect, useState, useContext, useRef } from 'react';
import { Stack, Pagination, Paper } from '@mantine/core';
import { SettingsContext } from '../../Context/settings';
import {
  CSSTransition,
  TransitionGroup,
  SwitchTransition,
} from 'react-transition-group';
import 'animate.css';
import './style.css';
import Todo from '../todo';

export default function TodoList({
  list,
  toggleComplete,
  deleteItem,
  incomplete,
}) {
  const { userSettings } = useContext(SettingsContext);
  const [listStart, setListStart] = useState(0);
  const [displayList, setDisplayList] = useState(list);
  const [activePage, setPage] = useState(1);

  useEffect(() => {
    setDisplayList(
      list
        .filter((item) => userSettings.showCompletedTasks || !item.complete)
        .slice(listStart, listStart + userSettings.itemsPerPage)
    );
    setListStart(userSettings.itemsPerPage * (activePage - 1));
  }, [
    list,
    listStart,
    activePage,
    userSettings.itemsPerPage,
    userSettings.showCompletedTasks,
  ]);

  return (
    <>
      <Stack>
        <SwitchTransition>
          <CSSTransition
            key={activePage}
            timeout={500}
            classNames={{
              appear: 'animate__animated',
              appearActive: 'animate__animated animate__fadeInRight',
              enter: 'opacity_0',
              enterActive: 'opacity_transition opacity_100',
              exit: 'animate__animated',
              exitActive: 'animate_animated animate__fadeOutRight opacity_0',
              exitDone: 'opacity_0',
            }}
          >
            <Stack>
              <TransitionGroup component={null}>
                {displayList.map((item, i) => (
                  <CSSTransition
                    key={item.id}
                    nodeRef={item.nodeRef}
                    classNames={{
                      // appear: 'animate__animated',
                      appearActive: 'animate__animated animate__fadeInRight',
                      // enter: 'animate__animated',
                      enterActive: 'animate__animated animate__fadeIn',
                      // exit: 'animate__animated',
                      exitActive: 'animate__animated animate__backOutUp',
                    }}
                    timeout={{
                      enter: 500,
                      exit: 500,
                    }}
                  >
                    <Todo
                      key={item.id}
                      item={item}
                      toggleComplete={toggleComplete}
                      deleteItem={deleteItem}
                    />
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </Stack>
          </CSSTransition>
        </SwitchTransition>
        <Pagination
          page={activePage}
          onChange={(val) => {
            setPage(val);
          }}
          total={
            userSettings.showCompletedTasks
              ? Math.ceil(list.length / userSettings.itemsPerPage)
              : Math.ceil(incomplete / userSettings.itemsPerPage)
          }
        />
      </Stack>
    </>
  );
}
