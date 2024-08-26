import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Member() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    grade: "",
    debt: "",
    active_status: "",
    scroll_number: "",
    comments: "",
  });
  const [isNew, setIsNew] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id?.toString() || undefined;
      if (!id) return;
      setIsNew(false);
      const response = await fetch(
        `http://localhost:5000/members/${params.id.toString()}`
      );
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const member = await response.json();
      if (!member) {
        console.warn("Record with id ${id} not found");
        return;
      }
      setForm(record);
    }
    fetchData();
    return;
  }, [params.id, navigate]);

  //This method will upodate the state properties
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  //This function will handle the submission
  async function onSubmit(e) {
    e.preventDefault();
    const person = { ...form };
    try {
      let response;
      if (isNew) {
        //if we are adding a new member we will POST to /members
        response = await fetch("http://localhost:5000/members", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(person),
        });
      } else {
        //if we are updating an existing member we will PATCH to /members/:id
        response = await fetch(`http://localhost:5000/members/${params.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(person),
        });
      }

      if (!response.ok) {
        throw new Error("HTTP ERROR: ${response.status}");
      }
    } catch (error) {
      console.error("A problem occured adding or updating a member: ", error);
    } finally {
      setForm({
        name: "",
        position: "",
        grade: "",
        debt: "",
        active_status: "",
        scroll_number: "",
        comments: "",
      });
      navigate("/");
    }
  }

  //this following section will display the form that takes the input from the user.
  return (
    <>
      <h3 className="text-lg font-semibold p-4">Create/Update Member Record</h3>
      <form
        onSubmit={onSubmit}
        className="border rounded-lg overflow-hidden p-4"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-slate-900/10 pb-12 md:grid-cols-2">
          <div>
            <h2 className="text-base font-semibold leading-7 text-slate-900">
              Member Info
            </h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              This information is currently public shared, so be careful what
              you share/enter.
            </p>
          </div>
          <p className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8"></p>
        </div>

        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-900"
            >
              Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Enter full name"
                  value={form.name}
                  onChange={(e) => updateForm({ name: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8">
          <div className="sm:col-span-2">
            <label
              htmlFor="position"
              className="block text-sm font-medium text-slate-900"
            >
              position
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="position"
                  id="position"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Enter Position currently held"
                  value={form.position}
                  onChange={(e) => updateForm({ position: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8">
          <div className="sm:col-span-2">
            <label
              htmlFor="grade"
              className="block text-sm font-medium text-slate-900"
            >
              Grade
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="grade"
                  id="grade"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Enter current grade"
                  value={form.grade}
                  onChange={(e) => updateForm({ grade: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8">
          <div className="sm:col-span-2">
            <label
              htmlFor="debt"
              className="block text-sm font-medium text-slate-900"
            >
              Debt
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="debt"
                  id="debt"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Enter current debt"
                  value={form.debt}
                  onChange={(e) => updateForm({ debt: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8">
          <div className="sm:col-span-2">
            <label
              htmlFor="active status"
              className="block text-sm font-medium text-slate-900"
            >
              Active Status
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="active status"
                  id="active status"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Enter current debt"
                  value={form.active_status}
                  onChange={(e) => updateForm({ active_status: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8">
          <div className="sm:col-span-2">
            <label
              htmlFor="scroll number"
              className="block text-sm font-medium text-slate-900"
            >
              Scroll Number
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="scroll number"
                  id="scroll number"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="scroll number"
                  value={form.scroll_number}
                  onChange={(e) => updateForm({ scroll_number: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8">
          <div className="sm:col-span-2">
            <label
              htmlFor="comments"
              className="block text-sm font-medium text-slate-900"
            >
              Comments
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="comments"
                  id="comments"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="comments"
                  value={form.comments}
                  onChange={(e) => updateForm({ comments: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>
        <input
        type="submit"
        value="Save member"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        />
      </form>
    </>
  );
}
