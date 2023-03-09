import React from "react";
import Link from "next/link";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";

const Pagination = (props) => {
  let page_arr = [],
    paginationNow,
    endOfPagination,
    startOfPagination,
    paginationStart,
    paginationEnd;

  let routeUrl;

  if (props.page != null) {
    for (let i = 1; i <= props.totalPages; i++) {
      page_arr.push(i);
    }

    let paginateShow;
    if (page_arr.length > 7) {
      paginationEnd = [page_arr.length - 1, page_arr.length];
      paginationStart = [1, 2];
      if (props.page === 1 || props.page === 2) {
        paginateShow = page_arr.slice(0, 5);
      } else if (props.page >= page_arr.length - 3) {
        paginateShow = [
          page_arr.length - 4,
          page_arr.length - 3,
          page_arr.length - 2,
          page_arr.length - 1,
          page_arr.length,
        ];
      } else {
        paginateShow = [
          props.page - 2,
          props.page - 1,
          props.page,
          props.page + 1,
          props.page + 2,
        ];
      }
    } else {
      paginateShow = page_arr;
    }

    switch (props.type) {
      case "search":
        routeUrl = `/search/${props.query}/`;
        break;
      case "upcoming":
        routeUrl = `/upcoming/`;
        break;

      default:
        break;
    }

    paginationNow = paginateShow?.map((item) => {
      return (
        <Link key={item} href={`${routeUrl}${item}`}>
          <div
            onClick={() => props.pageClick(item)}
            className={`pagination-item ${item === props.page && 'bg-primary'}`
            }
          >
            <p className="mb-0">{item}</p>
          </div>
        </Link>
      );
    });

    if (page_arr.length > 7 && props.page < page_arr.length - 3) {
      endOfPagination = paginationEnd?.map((item) => {
        return (
          <Link key={item} href={`${routeUrl}${item}`}>
            <div
              onClick={() => props.pageClick(item)}
              className={`pagination-item ${item === props.page && 'bg-primary'}`}
            >
              <p className="mb-0">{item}</p>
            </div>
          </Link>
        );
      });
    } else if (props.page >= page_arr.length - 3) {
      endOfPagination = "";
    } else {
      endOfPagination = "";
    }

    if (props.page > 7) {
      startOfPagination = paginationStart?.map((item) => {
        return (
          <Link key={item} href={`${routeUrl}${item}`}>
            <div
              onClick={() => props.pageClick(item)}
              className={`pagination-item ${item === props.page && 'bg-primary'}`}
            >
              <p className="mb-0">{item}</p>
            </div>
          </Link>
        );
      });
    } else {
      startOfPagination = "";
    }
  }

  return (
    <>
      <div className='paginate-wrapper w-full md:w-1/2 mx-auto mt-12 flex justify-center items-center'>
        {props.page === 1 ? (
          <button onClick={props.goToBackPage} disabled={props.page === 1}>
            <ArrowBackIosRounded />
          </button>
        ) : (
          <Link href={`${routeUrl}${props.page - 1}`}>
            <button onClick={props.goToBackPage} disabled={props.page === 1}>
              <ArrowBackIosRounded />
            </button>
          </Link>
        )}
        <div className='mr-3 text-wah'>
          {startOfPagination}
          {startOfPagination !== "" && <span> ... </span>}
          {paginationNow}
          {endOfPagination !== "" && <span> ... </span>}
          {endOfPagination}
        </div>
        {props.page === page_arr.length ? (
          <button
            onClick={props.goToNextPage}
            disabled={props.page === page_arr.length}
          >
            <ArrowForwardIosRounded />
          </button>
        ) : (
          <Link href={`${routeUrl}${props.page + 1}`}>
            <button
              onClick={props.goToNextPage}
              disabled={props.page === page_arr.length}
            >
              <ArrowForwardIosRounded />
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Pagination;
